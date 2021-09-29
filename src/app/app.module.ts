import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';

import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';


import { registerLocaleData } from '@angular/common'
import localePtBr from '@angular/common/locales/pt'
registerLocaleData(localePtBr);


//Pipe
import { DescricaoReduzida } from './util/descricao-rdeuzida.pipe';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ 
                { provide: LOCALE_ID, useValue:'pt-BR' } ,
                { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" }
             ],
  bootstrap: [AppComponent],
})


export class AppModule { }
