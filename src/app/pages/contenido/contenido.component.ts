import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  photoCover:string="https://ichef.bbci.co.uk/images/ic/1024x576/p05xwzr1.jpg"
  contenidoTitle:string="ULTIMA NOTICIA BOMBASOOOOO"
  contenidoDescription:string="Las ultimas noticias sobre la pelicula de KUNFU PANDA 2, segun los espectadores, la pelicula esta buenisima."
  constructor(
    
  ) { }

  ngOnInit(): void {
   
  }

}
