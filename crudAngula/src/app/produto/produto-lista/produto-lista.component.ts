import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConexaoService } from '../conexao.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  public produtos: Array<any> = [];

  

  constructor(private service: ConexaoService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.service.list().subscribe((r)=>{
        this.produtos = r;
    })
  }
  onEdit(id: any){
    this.router.navigate(['editar', id], {relativeTo:this.route})
  }
}
