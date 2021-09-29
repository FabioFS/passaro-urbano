import { HttpClient, HttpResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { GlobalConstants } from "./app.api"

import { Oferta } from "./shared/oferta.model"
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OfertasService  {
 
    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get<HttpResponse<Oferta[]>>(`${GlobalConstants.URI_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta)
    
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get<HttpResponse<Oferta[]>>(`${GlobalConstants.URI_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }
    
    public getOfertaPorId(id: number) : Promise<Oferta> {
        return this.http.get<HttpResponse<Oferta[]>>(`${GlobalConstants.URI_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
                return resposta[0]
                
        })
    }

    public getComoUsarOfertasId(id: number) : Promise<string> {
         return this.http.get<HttpResponse<Oferta[]>>(`${GlobalConstants.URI_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
                
        })
    }

    public getOndeFicaOfertasId(id: number) : Promise<string> {
        return this.http.get<HttpResponse<Oferta[]>>(`${GlobalConstants.URI_API}/onde-fica?id=${id}`)
       .toPromise()
       .then((resposta: any) => {
           return resposta[0].descricao
               
       })
   }

   public ofertaPorPesquisa(termo: string): Observable<Oferta[]>{
       return this.http.get<HttpResponse<Oferta[]>>(`${GlobalConstants.URI_API}/ofertas?descricao_oferta_like=${termo}`)
             .pipe( retry(10), map((resposta: any) => resposta))
   }

    // public ofertas : Oferta[] = [
    //     {
    //         id: 1,
    //         categoria: "restaurante",
    //         titulo: "Super Burger",
    //         descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
    //         anunciante: "Original Burger",
    //         valor: 29.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/1/img1.jpg"},
    //             {url: "/assets/ofertas/1/img2.jpg"},
    //             {url: "/assets/ofertas/1/img3.jpg"},
    //             {url: "/assets/ofertas/1/img4.jpg"}
    //         ]
    //     },
    //     {
    //         id: 2,
    //         categoria: "restaurante",
    //         titulo: "Cozinha Mexicana",
    //         descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
    //         anunciante: "Mexicana",
    //         valor: 32.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/2/img1.jpg"},
    //             {url: "/assets/ofertas/2/img2.jpg"},
    //             {url: "/assets/ofertas/2/img3.jpg"},
    //             {url: "/assets/ofertas/2/img4.jpg"}
    //         ]
        
    //     },
    //     {
    //         id: 4,
    //         categoria: "diversao",
    //         titulo: "Estância das águas",
    //         descricao_oferta: "Diversão garantida com piscinas trilhas e muito mais.",
    //         anunciante: "Estância das águas",
    //         valor: 31.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/4/img1.jpg"},
    //             {url: "/assets/ofertas/4/img2.jpg"},
    //             {url: "/assets/ofertas/4/img3.jpg"},
    //             {url: "/assets/ofertas/4/img4.jpg"},
    //             {url: "/assets/ofertas/4/img5.jpg"},
    //             {url: "/assets/ofertas/4/img6.jpg"}
    //         ]
    //     }
    // ]
    // public getOfertas() : Array<Oferta> {
    
    //     return this.ofertas
    // }
 
//   public getOferta2(): Promise<Oferta[]> {
//     return new Promise((resolve, reject) =>{
//       // algum tipo de pricessamento, que ao finalizar chama o resolve... ou função reject
//       let deu_certo = true
//       if (deu_certo) {
//         setTimeout(() => resolve( this.ofertas ), 3000)  
        
//       } else {
//           reject({codigo_erro: 404, msg: 'Server not found'})
//       }
      
//     })
//     .then(( ofertas: any) =>{
//         console.log('Primeiro then')
//         return ofertas
//       })
//         .then(( ofertas: any) =>{
//             console.log('Segundo then')
//             return new  Promise((resolve2, reject2) =>{
//                 setTimeout(() => {resolve2( ofertas )}, 3000)
//             })
//         })
//         .then(( ofertas: any) =>{
//             console.log('Terceiro then excutado apos 3 segundos por conta do Segundo then')
//             return ofertas
//         })
        
//     }

}