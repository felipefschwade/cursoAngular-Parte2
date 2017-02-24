import { Router, RouterModule } from '@angular/router';
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

export const Routing = RouterModule.forRoot([
    {
        path : "",
        component : ListagemComponent
    },
    {
        path : "cadastro",
        component : CadastroComponent
    },
    {
        path : "cadastro/:id",
        component : CadastroComponent
    },
    {
        path : "**",
        redirectTo : ""
    }
]);