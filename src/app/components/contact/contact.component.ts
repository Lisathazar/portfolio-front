import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: [''],
    email: [''],
    message:['']
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
