import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BackendService {

    constructor(
        private http: HttpClient
    ) { }

    GETRequest(requestTarget: string, responseType: any = 'json'): Observable<any> {
        return this.http.get(
            "http://localhost:5002/api/" + requestTarget,
            {
                observe: 'response',
                responseType: responseType
            }
        );
    }

    POSTRequest(requestTarget: string, requestData: any, responseType: any = 'json'): Observable<any> {
        return this.http.post(
            "http://localhost:5002/api/" + requestTarget,
            requestData,
            {
                observe: 'response',
                responseType: responseType
            }
        );
    }

    PUTRequest(requestTarget: string, requestData: any, responseType: any = 'json'): Observable<any> {
        return this.http.put(
            "http://localhost:5002/api/" + requestTarget,
            requestData,
            {
                observe: 'response',
                responseType: responseType
            }
        );
    }

    DELETERequest(requestTarget: string, responseType: any = 'json'): Observable<any> {
        return this.http.delete(
            "http://localhost:5002/api/" + requestTarget,
            {
                observe: 'response',
                responseType: responseType
            }
        );
    }
}