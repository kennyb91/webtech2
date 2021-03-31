import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Lakas } from './lakas';


@Injectable()
export class LakasokService {
    selectedLakas!: Lakas;
    lakasok!: Lakas[];
    readonly baseURL = "http://localhost:3000/lakasok";



    constructor(public http: HttpClient) { }


    postLakas(lak: Lakas) {
        return this.http.post(this.baseURL, lak);
    }

    getLakasokList(){
        return this.http.get(this.baseURL);
    }

    putLakasok(lak: Lakas) {
        return this.http.put(this.baseURL + `/${lak._id}`, lak);
    }
   

    deleteLakas(_id: String){
        return this.http.delete(this.baseURL + `/${_id}`);
    }

}