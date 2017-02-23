import { Component } from "@angular/core";
import { Http } from '@angular/http';
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../foto/foto.service";

@Component({
    moduleId : module.id,
    selector : "listagem",
    templateUrl : './listagem.component.html'
})
export class ListagemComponent 
{
    fotos: FotoComponent[] = [];
    service: FotoService;

    constructor(service: FotoService, http: Http)
    {
        this.service = service;
        this.service.lista()
            .subscribe(fotos => this.fotos = fotos, 
            erro => console.log(erro));
    }

    remove(foto)
    {
        this.service.remove(foto)
            .subscribe(
                () => console.log("Foto Removida com Sucesso"),
                erro => console.log(erro)
            );
    }

}