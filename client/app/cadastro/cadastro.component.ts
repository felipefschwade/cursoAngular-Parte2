import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    moduleId : module.id,
    selector : "cadastro",
    templateUrl : "./cadastro.component.html" 
})
export class CadastroComponent { 

    foto: FotoComponent = new FotoComponent();
    htpp: Http;
    fotoForm: FormGroup;

    constructor(http: Http, formBuilder: FormBuilder)
    {
        this.htpp = http;
        this.fotoForm = formBuilder.group({
            titulo : ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            url : ['', Validators.required],
            descricao : []
        });
    }

    cadastrar(event: Event)
    {
        event.preventDefault();
        let headers = new Headers({'Content-Type' : 'application/json'});
        console.log(this.foto);
        this.htpp.post("v1/fotos", JSON.stringify(this.foto), {headers : headers})
        .subscribe(() => console.log("Imagem Salva Com Sucesso"),
        error => console.log(error));
        this.foto = new FotoComponent();
    }

}