import { OnInit } from '@angular/core';
import { Component, VERSION } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(
    private formBuilder:FormBuilder
  ){}
  
ngOnInit(): void {
  this.input = this.formBuilder.group({
    user_input:['',[Validators.required,Validators.maxLength(15)]],
    field_1:['',[Validators.required,Validators.maxLength(15)]],
    field_2:['',[Validators.required,Validators.maxLength(15)]]
  })
}
  input :FormGroup
  public types :any = [
    {
      type:"Numeric"
    },
    {
      type:"Alphabetic"
    },
    {
      type:"Alphanumeric"
    },
    {
      type:"All"
    }
  ]
  onsave(){
    // console.log(this.input.value)
  }

  onreset(){
    this.input.reset()
  }

  onchange(){
    let typeSelected = this.input.get('user_input').value;
    if(typeSelected == "Numeric"){
      this.input.get('field_1').setValidators([Validators.required,Validators.pattern('[0-9]*')]);
      this.input.get('field_1').updateValueAndValidity();
      this.input.get('field_2').setValidators([Validators.required,Validators.pattern('[0-9]*')]);
      this.input.get('field_2').updateValueAndValidity();
    }
    else if(typeSelected == "Alphabetic"){
      this.input.get('field_1').setValidators([Validators.required,Validators.pattern('[a-zA-Z]*')]);
      this.input.get('field_1').updateValueAndValidity();
      this.input.get('field_2').setValidators([Validators.required,Validators.pattern('[a-zA-Z]*')]);
      this.input.get('field_2').updateValueAndValidity();
    }
    else if(typeSelected == "Alphanumeric"){
      this.input.get('field_1').setValidators([Validators.required,Validators.pattern('[a-zA-Z0-9]*')]);
      this.input.get('field_1').updateValueAndValidity();
      this.input.get('field_2').setValidators([Validators.required,Validators.pattern('[a-zA-Z0-9]*')]);
      this.input.get('field_2').updateValueAndValidity();
    }
    else if(typeSelected == "Alphanumeric"){
      this.input.get('field_1').setValidators([Validators.required,Validators.pattern('/\s/g,')]);
      this.input.get('field_1').updateValueAndValidity();
      this.input.get('field_2').setValidators([Validators.required,Validators.pattern('[a-zA-Z0-9]*')]);
      this.input.get('field_2').updateValueAndValidity();
    }
  }
}
