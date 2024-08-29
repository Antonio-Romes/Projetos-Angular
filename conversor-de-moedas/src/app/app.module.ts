import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/components/conversor.component';
import { ConversorService } from './conversor/services/conversor.service';
import { MoedaService } from './conversor/services/moeda.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ConversorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration(), ConversorService, MoedaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
