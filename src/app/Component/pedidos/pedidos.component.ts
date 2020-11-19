import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  listadepedidos: any = []
  data
  constructor(private pedidosservice: PedidosService) { }

  async ngOnInit() {
    console.log(await this.pedidosservice.getProducts());
    this.listadepedidos = await this.pedidosservice.getProducts();
    this.data = this.listadepedidos.data;
  }



}
