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
        usuarios.id='1';
        usuarios.userName='alejandro';
        usuarios.password='0328'
        usuarios.name='magno';
        usuarios.email='alejandro'
    this.addFirstElement(usuarios);
    
   

  }

  


public addFirstElement(usuario:Usuario):void{
this.listaUsuarios.unshift(usuario);
}

  }


