import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeMedicamentComponent } from './liste-medicament/liste-medicament.component';

registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    FormulaireInscriptionComponent,
    ConnectionComponent,
    HomeComponent,
    ListeMedicamentComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path : 'formulaire-inscription' , component : FormulaireInscriptionComponent}
    ]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
