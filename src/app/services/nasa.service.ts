import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private endpoint:string="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=vjcNnFkUg1b87RoO7rjvmlRKfUVF7g1W0Tq6v0Em";
  
  private header = new HttpHeaders()
  .set('Accept','application/json')
  .set('Content-Type', 'application/json ; charset=utf-8');
  public datos:any;
  
  constructor(private http: HttpClient) { }

  private opciones = {
    headers: this.header
  }

  public getPhoto():Observable<any>{
    return this.http.get(this.endpoint, this.opciones);
  }


}
