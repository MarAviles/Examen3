import { Component } from '@angular/core';
import { University } from '../interfaces/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  universidades: University[] = [];
  universidad: University = {} as University;
  country = '';
  mensaje = false;


  constructor(private UnivService: UniversityService) {}

  buscar(event){
    console.log(event.detail.value);

    this.country = event.detail.value;

    this.UnivService.buscarUniversidad(this.country).subscribe((res:any)=>{
      if(res != ""){
        this.mensaje = false;
        this.universidades = res;
        this.universidad = this.universidades[0];
      }else{
        this.mensaje = true;
      }
      

    },(error)=>{

    });

  }

  ver(){
    console.log("HOLA");
  }
}
