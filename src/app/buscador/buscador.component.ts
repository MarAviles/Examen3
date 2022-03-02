import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { University } from '../interfaces/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  buscador = this.FormBuilder.group({
    country: 'Argentina',
  })

  universidades: University[] = [];
  universidad: University = {} as University;
  status = false;

  constructor(private FormBuilder: FormBuilder, private UnivService: UniversityService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(){
    let country: string = this.buscador.get('country')?.value;

    this.UnivService.buscarUniversidad(country).subscribe((res:any)=>{
      this.universidades = res;
      this.universidad = this.universidades[0];

    });
  }

}
