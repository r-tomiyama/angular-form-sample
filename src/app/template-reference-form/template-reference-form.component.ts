import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-reference-form',
  templateUrl: './template-reference-form.component.html',
  styleUrls: ['./template-reference-form.component.css']
})
export class TemplateReferenceFormComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(itemForm: NgForm) {
    // TODO
  }

}
