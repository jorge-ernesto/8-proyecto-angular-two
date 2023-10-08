import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

	@Input() anchura: any;
	@Input('etiquetas') captions: any;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){

    this.autor = {
      nombre: "Víctor Robles",
      website: "victorroblesweb.es",
      youtube: "Victor Robles WEB"
    };

  }

  ngOnInit() {
		$("#logo").click(function(e: any){
  		e.preventDefault();

  		$("header").css("background","green")
  				   .css("height","50px");
  	});

  	$('.galeria').bxSlider({
	    mode: 'fade',
	    captions: this.captions,
	    slideWidth: this.anchura
	  });

    // Lanzar evento
     this.conseguirAutor.emit(this.autor);

  }

  lanzar(event: any){
    this.conseguirAutor.emit(this.autor);
  }

}
