import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../foto/foto.service";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId : module.id,
    selector : "cadastro",
    templateUrl : "./cadastro.component.html" 
})
export class CadastroComponent { 

    route: ActivatedRoute;
    foto: FotoComponent = new FotoComponent();
    fotoForm: FormGroup;
    service: FotoService;

    constructor(service: FotoService, formBuilder: FormBuilder, route: ActivatedRoute)
    {
        this.route = route;
        this.service = service;
        this.route.params.subscribe(params => {
            let id = params["id"];
            if (id) {
            this.service
                .buscaPorId(id)
                .subscribe(foto => this.foto = foto,
                erro => console.log(erro));
        }
        });

        this.fotoForm = formBuilder.group({
            titulo : ["", Validators.compose([Validators.required, Validators.minLength(4)])],
            url : ['', Validators.required],
            descricao : []
        });
    }

    cadastrar(event: Event)
    {
        event.preventDefault();
        console.log(this.foto);
        this.service.cadastra(this.foto)
            .subscribe(() => {
                console.log("Imagem Salva Com Sucesso");
                this.foto = new FotoComponent(); },
            error => console.log(error));
    }

}