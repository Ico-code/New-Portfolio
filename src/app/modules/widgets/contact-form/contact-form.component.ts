import { Component, EventEmitter, OnInit } from '@angular/core';

interface formControls {
  id: string;
  selected: boolean;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  selectedForms: Array<formControls> = [
    { id: 'Name', selected: false },
    { id: 'Email', selected: false },
    { id: 'Topic', selected: false },
    { id: 'Content', selected: false },
  ];
  selected(event: Event): void {
    var target = (event.target as HTMLInputElement).id;
    this.selectedForms.forEach((element) => {
      if (element.id == target) {
        element.selected = true;
      }
    });
  }

  notSelected(event: Event): void {
    var target = (event.target as HTMLInputElement).id;
    this.selectedForms.forEach((element) => {
      if (element.id == target) {
        element.selected = false;
      }
    });
  }

  isThisElementSelected(Id: string) {
    for (let index: number = 0; index < this.selectedForms.length; index++) {
      if (this.selectedForms[index].id != Id) {
        continue;
      }
      if (this.selectedForms[index].selected == true) {
        return 'selected blueSelected';
      } else {
        return 'unselected blueSelected';
      }
    }
    return 'unselected blueSelected';
  }

  constructor() {}

  ngOnInit(): void {}
}
