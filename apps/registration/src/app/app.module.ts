import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './page/form/form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const routes: Routes = [{ path: 'Forms', component: FormComponent },]
@NgModule({
  declarations: [AppComponent, FormComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    MultiSelectModule,
    DropdownModule,
    TabViewModule,
    TabMenuModule,
    CalendarModule,
    RadioButtonModule,
    SplitButtonModule,
    ToggleButtonModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
