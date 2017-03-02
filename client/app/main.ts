import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app.module";

//Cria a um instância de platformBrowserDynamic para carregar o primeiro modulo da app e o restante em seguida
const platform = platformBrowserDynamic();
//Define como modulo principal da app o AppModule criando anteriormente
// enableProdMode();
platform.bootstrapModule(AppModule);