import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public listaUsuarios:Usuario[]=[];

  constructor(){
    let usuarios:Usuario=new Usuario();
    usuarios.nombre='alejandro';
    usuarios.apellido='quiceno';
    usuarios.edad='25';
    usuarios.estado=true;
    this.addFirstElement(usuarios);
    
   

  }

  


public addFirstElement(usuario:Usuario):void{
this.listaUsuarios.unshift(usuario);
}

  }


