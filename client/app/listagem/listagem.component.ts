import { Component } from "@angular/core";
import { Http } from '@angular/http';
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../foto/foto.service";
import { PainelComponent } from "../painel/painel.component";

@Component({
    moduleId : module.id,
    selector : "listagem",
    templateUrl : './listagem.component.html'
})
export class ListagemComponent 
{
    mensagem: string = "";
    fotos: FotoComponent[] = [];
    service: FotoService;

    constructor(service: FotoService, http: Http)
    {
        this.service = service;
        this.service.lista()
            .subscribe(fotos => this.fotos = fotos, 
            erro => console.log(erro));
    }

    remove(foto: FotoComponent, painel: PainelComponent)
    {
        this.service.remove(foto)
            .subscribe(
                () => {
                    painel.fadeOut(() => {
                        this.mensagem = "Foto Removida com Sucesso";
                        let fotos = this.fotos.slice(0);
                        let index = fotos.indexOf(foto);
                        fotos.splice(index, 1);
                        this.fotos = fotos;
                    })
                },
                erro => 
                { 
                    console.log(erro)
                    this.mensagem = "Não foi possivel remover a foto";
                }
            );
    }

}