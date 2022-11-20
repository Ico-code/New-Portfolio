import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {


  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

}
