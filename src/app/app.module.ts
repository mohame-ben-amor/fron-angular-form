import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CasqueComponent } from './casque/casque.component';
import { ClavierComponent } from './clavier/clavier.component';
import { MerciComponent } from './merci/merci.component';
import { PcComponent } from './pc/pc.component';
import { SourisComponent } from './souris/souris.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormRegisterService } from './form/form-register.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CasqueComponent,
    ClavierComponent,
    MerciComponent,
    PcComponent,
    SourisComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
