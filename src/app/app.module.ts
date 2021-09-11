import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { FooterComponent } from './components/footer/footer.component';
import { GratisComponent } from './components/gratis/gratis.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { TopoComponent } from './components/topo/topo.component';
import { NovosPopularesComponent } from './components/novos-populares/novos-populares.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RecentesComponent } from './components/recentes/recentes.component';
import { NovosComponent } from './components/novos/novos.component';
import { PopularesComponent } from './components/populares/populares.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    DestaquesComponent,
    FooterComponent,
    GratisComponent,
    PromocoesComponent,
    TopoComponent,
    NovosPopularesComponent,
    RecentesComponent,
    NovosComponent,
    PopularesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
