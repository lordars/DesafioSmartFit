import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { GetUnitsService } from './services/get-units.service';
import { Location } from './types/location.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent, ReactiveFormsModule, HttpClientModule, CardsListComponent, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = []


  constructor(private unitsService: GetUnitsService) { }

  onSubmit() {
    this.unitsList = this.unitsService.getFilterUnits();
    this.showList.next(true);
  }
}
