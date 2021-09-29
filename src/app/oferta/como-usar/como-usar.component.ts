import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.services';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsarDescricao!: string

  constructor(private ofertasService: OfertasService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.parent?.params.subscribe(( parametros: Params) => {
        this.ofertasService.getComoUsarOfertasId(parametros.id)
        .then((resposta: string) => {
          this.comoUsarDescricao = resposta
      })
    })
  }

}
