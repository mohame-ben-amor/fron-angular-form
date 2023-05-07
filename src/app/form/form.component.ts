import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormRegisterService } from './form-register.service';
import { FormRegister } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup
  validate:boolean = false;
  item: FormRegister | null = null;
  constructor(
    private formBuilder:FormBuilder,
    private serviceRegister:FormRegisterService 
    ){
    this.form = formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      quantite: ['',[Validators.required]],
      code_carte:['',[Validators.required]]
   })
  }

onSubmit(){
    this.item = {
      email: this.form.get("email")?.value,
      code_carte: this.form.get("code_carte")?.value,
      firstName: this.form.get("firstName")?.value,
      lastName: this.form.get("lastName")?.value,
      quantite: this.form.get("quantite")?.value
    }
    this.serviceRegister.register(this.item).subscribe(data =>{
      console.log(data);
    });
}
}
