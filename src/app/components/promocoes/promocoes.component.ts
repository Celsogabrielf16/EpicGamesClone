import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calcularDesconto(preco: number, porcentagem: number): number{
    let precoNovo = preco - (preco * (porcentagem/100))

    return precoNovo
  }

}


