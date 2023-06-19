<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}
 
if ($_SERVER['REQUEST_METHOD'] !== 'POST') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request!.Only POST method is allowed',
    ]);
    exit;
endif;
 
require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();
 
$data = json_decode(file_get_contents("php://input"));
//print_r($data);

try { 
    $first_name = htmlspecialchars(trim($data->first_name));
    $last_name = htmlspecialchars(trim($data->last_name));
    $company = htmlspecialchars(trim($data->company));
    $date_of_birth = htmlspecialchars(trim($data->date_of_birth));
    $url_img = htmlspecialchars(trim($data->url_img));
 
    $query = "INSERT INTO `goats`(
    first_name,
    last_name,
    company,
    date_of_birth,
    url_img,
    ) 
    VALUES(
    :first_name,
    :last_name,
    :company,
    :date_of_birth,
    :url_img,
    )";
 
    $stmt = $conn->prepare($query);
 
    $stmt->bindValue(':first_name', $first_name, PDO::PARAM_STR);
    $stmt->bindValue(':last_name', $last_name, PDO::PARAM_STR);
    $stmt->bindValue(':company', $company, PDO::PARAM_STR);
    $stmt->bindValue(':date_of_birth', $date_of_birth, PDO::PARAM_STR);
    $stmt->bindValue(':url_imge', $url_img, PDO::PARAM_STR);

    if ($stmt->execute()) {
 
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data Inserted Successfully.'
        ]);
        exit;
    }
    
    echo json_encode([
        'success' => 0,
        'message' => 'There is some problem in data inserting'
    ]);
    exit;
 
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}