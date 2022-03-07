import { Component } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public value:string;

  public list:Array<any>=[];
  i:number;
  constructor(private consumo:NasaService) {
    for(this.i=1;this.i<11;this.i++){
    }
  }

  valueChange(){
    console.log(this.value);
  }

  public getFotos(){
    this.consumo.getPhoto().subscribe(
      (data)=>{
        data["photos"].forEach(element => {
          this.list.push(element['img_src']);
      },err=>{
        console.log("ERROR AL TRAER LOS DATOS");
      });
      }
    );
  }

}
