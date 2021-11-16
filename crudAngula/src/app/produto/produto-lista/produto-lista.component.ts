import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexaoService } from '../conexao.service';
import { Produto } from '../produto';
/* import { BsModalService } from 'ngx-bootstrap/modal'; */

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
})
export class ProdutoListaComponent implements OnInit {
  public produtos: Array<any> = [];

  constructor(
    private service: ConexaoService,
    private router: Router,
    private route: ActivatedRoute,
   /*  private modalService: BsModalService */
  ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.service.list().subscribe((r) => {
      this.produtos = r;
    });
  }

  onEdit(id: any) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }
  /*  onDelete(produto:any){

  }  */
}
