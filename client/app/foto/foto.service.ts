import { Http, Headers, Response } from "@angular/http";
import { FotoComponent } from "../foto/foto.component";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FotoService
{
    http: Http;
    url: string;
    headers: Headers;

    constructor(http: Http)
    {
        this.url = "/v1/fotos";
        this.http = http;
        this.headers = new Headers({'Content-Type' : 'application/json'});
    }

    cadastra(foto: FotoComponent): Observable<MensagemService>
    {
        if (foto._id)
        {
            return this.http
                .put(this.url + "/" + foto._id,
                     JSON.stringify(foto),
                     {headers : this.headers})
                .map(() => ({mensagem : "Foto Alterada com Sucesso!", inclusao : false}));
        } else {
            return this.http
                .post(this.url, 
                    JSON.stringify(foto), 
                    {headers : this.headers})
                .map(() => ({mensagem : "Foto Adicionada com Sucesso!", inclusao : true}));
        }
    }

    lista(): Observable<FotoComponent[]>
    {
         return this.http
            .get(this.url)
            .map(res => res.json())
    }

    remove(foto: FotoComponent): Observable<Response>
    {
        return this.http.delete(this.url + "/" + foto._id);
    }

    buscaPorId(id): Observable<FotoComponent>
    {
        return this.http
                .get(this.url + "/" + id)
                .map(res => res.json());
    }

}

export class MensagemService
{
    constructor(readonly mensagem: string, readonly inclusao: boolean)
    {
        this.mensagem = mensagem;
        this.inclusao = inclusao;
    }
}