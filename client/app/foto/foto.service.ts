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

    cadastra(foto: FotoComponent): Observable<Response>
    {
        return this.http
            .post(this.url, 
                  JSON.stringify(foto), 
                  {headers : this.headers})
    }

    lista(): Observable<FotoComponent[]>
    {
         return this.http
            .get(this.url)
            .map(res => res.json())
    }
}