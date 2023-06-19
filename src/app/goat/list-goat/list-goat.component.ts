import { Component, OnInit } from '@angular/core';
import { GoatsService } from '../goats.service';

@Component({
  selector: 'app-list-goat',
  templateUrl: './list-goat.component.html',
  styleUrls: ['./list-goat.component.css']
})
export class ListGoatComponent {
  goats: any;

  constructor(private goatservice: GoatsService){}

  ngOnInit(): void {
    this.goatservice.getGoats().subscribe(
      (result:any)=>{
        this.goats = result.data;
      }
    )
  }

  deleteGoat(goat:any){
    this.goatservice.deleteGoat(goat.id).subscribe(data=>{
      this.goats = this.goats.filter((u: any) => u !== goat);
    })
  }
}
