import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFicaDescricao!: string

  constructor(private ofertasService: OfertasService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe((parametros: Params) => {
      this.ofertasService.getOndeFicaOfertasId(parametros.id)
      .then((resposta: string) => {
        this.ondeFicaDescricao = resposta
      })
    })
  }
}