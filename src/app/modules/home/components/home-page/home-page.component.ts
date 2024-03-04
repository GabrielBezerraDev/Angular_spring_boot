import { Component } from '@angular/core';
import { PedidoService } from '../../../../services/pedido/pedido.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private pedidoService: PedidoService){}

  public pedir():void{
    this.pedidoService.getPedido().subscribe((value) => console.log(value.teste));
  }

}
