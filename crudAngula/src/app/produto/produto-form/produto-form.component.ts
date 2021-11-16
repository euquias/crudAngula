import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  ConexaoService: any;
  produto: any;

  constructor(
    private fb: FormBuilder,
    private service: ConexaoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      console.log(id);
      const produto$ = this.service.loadByID(id);
      produto$.subscribe((produto) => {
        this.updateForme(produto)
      });
    });

    this.form = this.fb.group({
      id:[null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  updateForme(produto:any){
    this.form.patchValue({
      id: produto.id,
      nome: produto.nome
    })
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        (success) => console.log('sucesso'),
        (error) => console.error(error),
        () => console.log('request completo')
      );
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
