<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

 $method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') :
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request detected! Only PUT method is allowed',
    ]);
    exit;
endif;

require 'db_connect.php';
$database = new Operations();
$conn = $database->dbConnection();

$data = json_decode(file_get_contents("php://input"));


if (!isset($data->id)) {
    echo json_encode(['success' => 0, 'message' => 'Please enter correct Students id.']);
    exit;
}

try {
    $fetch_post = "SELECT * FROM `goats` WHERE id=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $data->id, PDO::PARAM_INT);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) :
        $row = $fetch_stmt->fetch(PDO::FETCH_ASSOC);
        $first_name = isset($data->first_name) ? $data->first_name : $row['first_name'];
        $last_name = isset($data->last_name) ? $data->last_name : $row['last_name'];
        $company = isset($data->company) ? $data->company : $row['company'];
        $date_of_birth = isset($data->date_of_birth) ? $data->date_of_birth : $row['date_of_birth'];
        $url_img = isset($data->url_img) ? $data->url_img : $row['url_img'];

       $update_query = "UPDATE `students` SET first_name = :first_name, last_name = :last_name, company = :company, date_of_birth = :date_of_birth, url_img = :url_img,
        WHERE id = :id";

        $update_stmt = $conn->prepare($update_query);

        $update_stmt->bindValue(':first_name', htmlspecialchars(strip_tags($first_name)), PDO::PARAM_STR);
        $update_stmt->bindValue(':last_name', htmlspecialchars(strip_tags($last_name)), PDO::PARAM_STR);
        $update_stmt->bindValue(':company', htmlspecialchars(strip_tags($company)), PDO::PARAM_STR);
        $update_stmt->bindValue(':date_of_birth', htmlspecialchars(strip_tags($date_of_birth)), PDO::PARAM_STR);
        $update_stmt->bindValue(':url_img', htmlspecialchars(strip_tags($url_img)), PDO::PARAM_STR);

        $update_stmt->bindValue(':id', $data->id, PDO::PARAM_INT);

        if ($update_stmt->execute()) {
            echo json_encode([
                'success' => 1,
                'message' => 'Record udated successfully'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Did not udpate. Something went  wrong.'
        ]);
        exit;

    else :
        echo json_encode(['success' => 0, 'message' => 'Invalid ID. No record found by the ID.']);
        exit;
    endif;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}