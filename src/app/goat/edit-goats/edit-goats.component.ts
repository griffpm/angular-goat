import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GoatsService } from '../goats.service';

@Component({
  selector: 'app-edit-goats',
  templateUrl: './edit-goats.component.html',
  styleUrls: ['./edit-goats.component.css']
})
export class EditGoatsComponent implements OnInit {
  addForm:any;
  vals = ''
  data = this.vals.split(',');
  goat_id: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private goatService: GoatsService,
    private url: ActivatedRoute
  ){
    this.addForm = this.formBuilder.group({
      id:[],
      first_name: ['', Validators.required],  
      last_name: ['', [Validators.required, Validators.maxLength(20)]],  
      company: ['', [Validators.required, Validators.maxLength(20)]],
      date_of_birth: ['', [Validators.required, Validators.maxLength(20)]],
      url_img: ['', [Validators.required, Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
    this.goat_id = this.url.snapshot.params['id'];
    if (this.goat_id>0) {
      this.goatService.getSingleStudent(this.goat_id).subscribe((
        (data:any)=>{
          this.addForm.patchValue(data.data);
        }
      ))
    }
  }
  onEdit(){
    this.goatService.editStudent(this.addForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.router.navigate(['/']);  
      },  
     error => {  
       alert(error);
     });
    }
}
