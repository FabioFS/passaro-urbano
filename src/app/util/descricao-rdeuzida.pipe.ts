import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'descricaoReduzida' })
export class DescricaoReduzida implements PipeTransform {
   
   
    transform(texto: string, truncaEm: number): string {
        
        if (texto.length > truncaEm) {
            return texto.substr(0,truncaEm) + '... '
        }

        return texto
    }
}