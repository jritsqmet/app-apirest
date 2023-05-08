import { Component } from '@angular/core';
import { NosotrosService } from 'src/app/servicios/nosotros.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {

  constructor(private servicio: NosotrosService){}

  //MÉTODO POST
  guardarNosotros(id: string, nom: string, ap: string, email: string, gen:string, pais:string ){
    const ide:number= parseInt(id)
    const temp={
      "id":ide,
      "nombre": nom,
      "apellido": ap,
      "email": email,
      "genero": gen,
      "pais": pais
    }
    this.servicio.postNosotros(temp).subscribe();
  }

  //MÉTODO PUT
  actualizarNosotros(id: string, nom: string, ap: string, email: string, gen:string, pais:string ){
    const ide:number= parseInt(id)
    const temp={
      "id":ide,
      "nombre": nom,
      "apellido": ap,
      "email": email,
      "genero": gen,
      "pais": pais
    }
    this.servicio.putNosotros(temp, ide).subscribe();
  }

  //MÉTODO DELETE
  eliminarNosotros(id:string){
    const ide: number= parseInt(id)
    this.servicio.deleteNosotros(ide).subscribe();

  }

}
