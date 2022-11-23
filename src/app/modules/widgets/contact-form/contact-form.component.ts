import { Component, EventEmitter, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

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

  faSquareXmark = faSquareXmark;

  contactMeForm:FormGroup

  selectedForms: Array<formControls> = [
    { id: 'Name', selected: false },
    { id: 'Email', selected: false },
    { id: 'Topic', selected: false },
    { id: 'Content', selected: false },
  ];

  sendMessage(){

  }

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

  constructor(
    private fb: FormBuilder
  ) {
    this.contactMeForm = this.fb.group({
      Name:['',[
        Validators.required,
      ]],
      Email:['',[
        Validators.required,
        Validators.email
      ]],
      Topic:['',[
        Validators.required
      ]],
      Content:['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(400)
      ]]
    });
  }

  get Name() {
    return this.contactMeForm.get('Name')
  }

  get Email() {
    return this.contactMeForm.get('Email')
  }

  get Topic() {
    return this.contactMeForm.get('Topic')
  }

  get Content() {
    return this.contactMeForm.get('Content')
  }


  ngOnInit() {
    this.contactMeForm.valueChanges.subscribe(console.log);
  }
}
