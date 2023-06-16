import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GOATS } from '../data-goats';
import { Goat } from '../goat';

@Component({
  selector: 'app-detail-goat',
  templateUrl: './detail-goat.component.html',
  styleUrls: ['./detail-goat.component.css']
})
export class DetailGoatComponent implements OnInit {

  goatList!: Goat[];
  goat: Goat|undefined
    constructor(
      private route: ActivatedRoute,
      private router: Router){}

    ngOnInit() {
      this.goatList = GOATS;
      const goatId:string|null = this.route.snapshot.paramMap.get('id');

      if(goatId){
        this.goat = this.goatList.find(goat => goat.id == +goatId)
      }
    }

    goToList() {
      this.router.navigate(['/goats']);
    }

}
