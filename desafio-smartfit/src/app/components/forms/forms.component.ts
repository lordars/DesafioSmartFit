import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';
import { CardsListComponent } from '../cards-list/cards-list.component';





@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CardsListComponent],

  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private unitServices: GetUnitsService,
    private filterUnitsService: FilterUnitsService
  ) {

  }
  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })

    this.unitServices.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;

    }
    );
  }





  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitServices.setFilterUnits(this.filteredResults);

    this.submitEvent.emit();
  }

  onClean(): void {
    this.filteredResults = this.results
    this.formGroup.reset();

  }

}


