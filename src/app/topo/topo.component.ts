import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]

})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>
  //public ofertas2!: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), //excuta ação do switchMap após 1 segundo
      distinctUntilChanged(), // se o texto for o mesmo ele não faz a pesquisa novamente.
      switchMap((termo: string) => {
        console.log('requisição http para a api')
        
        if ( termo.trim() === '' ) {
          return of<Oferta[]>([])
        
        }
        return this.ofertasService.ofertaPorPesquisa(termo)
      }),
      catchError((erro) => {
        console.log('Erro Subject - catchErro: ', erro.status)
        return of<Oferta[]>([])
      })
    )
      // this.ofertas.subscribe((ofertas: Oferta[]) => {
      //   this.ofertas2 = ofertas
        
      // })
  }
  // Usando com Subject e swicthMat
  public pesquisa(texto: string): void {

    this.subjectPesquisa.next(texto)

  }

  // Método usado com subscribe
  //
  // public pesquisa(texto: string): void {

  //   this.ofertas = this.ofertasService.ofertaPorPesquisa(texto)
  //   this.ofertas.subscribe(
  //     (ofertas: Oferta[]) => console.log(ofertas),
  //     (erro: any) => console.log('Erro Status', erro.status),
  //     () => console.log('Fluxo de Eventos Completo')
  //     )
  // }


  public limpaPesquisa(): void{
    this.subjectPesquisa.next('')
  }

}
