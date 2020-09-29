import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FotoFormComponent } from './components/foto-form/foto-form.component';
import { FotoListComponent } from './components/foto-list/foto-list.component';
import { FotoPreviewComponent } from './components/foto-preview/foto-preview.component';
import { FotoPriveComponent } from './components/foto-prive/foto-prive.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FotoFormComponent,
    FotoListComponent,
    FotoPreviewComponent,
    FotoPriveComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
