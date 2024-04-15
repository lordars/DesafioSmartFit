import { Component, Input, OnInit, input } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {

  @Input() unitsList: Location[] = []

  constructor() {

  }


  ngOnInit(): void {


  }

}
