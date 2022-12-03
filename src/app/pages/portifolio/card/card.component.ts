import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  constructor(
    private id: ActivatedRoute

  ){
    this.id.params.subscribe(
      res => console.log(res)
    )
  }


}
