import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FotoModule } from "./foto/foto.module";
import { HttpModule } from "@angular/http";
import { PainelModule } from "./painel/painel.module";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { Routing } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import "rxjs/add/operator/map";


@NgModule({
    imports : [
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule, 
        Routing,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations : [AppComponent, ListagemComponent, CadastroComponent],
    bootstrap : [AppComponent]
})
export class AppModule { }