import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {
  
  constructor() { 
    

  }

  ngOnInit(): void {
    
    this.boton_inciar_chat();
  }

  boton_inciar_chat(){
    const skipView = document.getElementById("chat");
    skipView.addEventListener("click", this.skip_view);
    

  }

  skip_view(){
      
    const transition_one = document.querySelector(".ventana_chat");
    transition_one.setAttribute('style','display: none');
    const ventana_dialogos = document.getElementById("ventana_dialogos");
    ventana_dialogos.setAttribute('style', 'display:block')
 
  }
}
