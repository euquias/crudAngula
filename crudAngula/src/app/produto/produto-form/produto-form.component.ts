import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConexaoService } from '../conexao.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ConexaoService) {}

  ngOnInit() {
    this.form = this.fb.group({
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

   hasError(field: string){
    return this.form.get(field)?.errors;
  } 
  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(
        _success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request completo')
      )
    }
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
