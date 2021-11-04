import { Component, OnInit } from '@angular/core';
import { ConexaoService } from '../conexao.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  public produtos: Array<any> = [1,2,3,5,6];
  constructor(private service: ConexaoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.service.list().subscribe((r)=>{
      debugger;
      this.produtos = r;
    })
  }
}
