import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CasqueComponent } from './casque/casque.component';
import { ClavierComponent } from './clavier/clavier.component';
import { FormComponent } from './form/form.component';
import { MerciComponent } from './merci/merci.component';
import { PcComponent } from './pc/pc.component';
import { SourisComponent } from './souris/souris.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent 
  },
  { 
    path: 'casque', 
    component: CasqueComponent 
  },
  { 
    path: 'clavier', 
    component: ClavierComponent 
  },
  { 
    path: 'form', 
    component: FormComponent 
  },
  { 
    path: 'merci', 
    component:  MerciComponent 
  },
  { 
    path: 'pc', 
    component:  PcComponent 
  },
  { 
    path: 'souris', 
    component:  SourisComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
