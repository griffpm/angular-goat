import { Component } from '@angular/core';
import { Goat } from '../goat';
import { GOATS } from '../data-goats';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-goat',
  templateUrl: './list-goat.component.html',
  styleUrls: ['./list-goat.component.css']
})
export class ListGoatComponent {
  goatList: Goat[] = GOATS;

  constructor(private router: Router){}

  goToGoat(goat: Goat){
    this.router.navigate(['/goat', goat.id]);
  }
}
