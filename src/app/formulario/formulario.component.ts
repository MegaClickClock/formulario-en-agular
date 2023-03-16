import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {  
  public form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.value);
  }

}
