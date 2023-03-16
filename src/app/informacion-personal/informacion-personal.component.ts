import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.sass'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ]
})
export class InformacionPersonalComponent implements OnInit {
  parentForm!:FormGroup;
  subcription:Subscription;

  constructor(private parent:FormGroupDirective, private fb:FormBuilder) { 
    this.subcription = new Subscription();
  }

  ngOnInit(): void {
    this.parentForm = this.parent.form;
    this.parentForm.addControl(
      'personal',
      this.fb.group({
        first: ['', Validators.required],
        last: ['', Validators.required],        
      })
    );    
  }
}