import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ],
})

export class OfertaComponent implements OnInit {

  private id!: number
  public oferta!: Oferta

  constructor(private ofertaService: OfertasService, private route: ActivatedRoute) { }

    ngOnInit(): void {

      this.route.params.subscribe((parametros: Params) => {
        
      this.ofertaService.getOfertaPorId(parametros.id)
      .then(( oferta: Oferta ) => {  
        this.oferta = oferta
        
      })

      // this.ofertaService.getOfertaPorId(this.id = this.route.snapshot.params['id'])
      // .then(( oferta: Oferta ) => {  
      //   this.oferta = oferta
    
    })
  }

  ngOnDestroy(): void {

  }

}
