import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'greenbits-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectedState: any = null;
  city!: string;
  items!: MenuItem[];
  checked2 = false;
  activeItem!: MenuItem;

  cities: any[];

  value9: any;

  value8: any;

  date3!: Date;

  states: any[] = [
    { name: 'Arizona', code: 'Arizona' },
    { name: 'California', value: 'California' },
    { name: 'Florida', code: 'Florida' },
    { name: 'Ohio', code: 'Ohio' },
    { name: 'Washington', code: 'Washington' }
  ];

  constructor() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit(): void {

    this.items = [
      { label: 'Form I' },
      { label: 'Form II' },
      { label: 'Form III' },
    ];

    this.activeItem = this.items[0];


  }




}
