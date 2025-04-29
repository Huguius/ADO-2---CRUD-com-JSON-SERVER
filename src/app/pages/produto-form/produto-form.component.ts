import { Component } from '@angular/core';
import { Produtos } from '../../services/types/types';
import { ProdutosService } from '../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  imports: [FormsModule],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent {

  titulo: string = 'Cadastro de Produtos';

  produto: Produtos = {} as Produtos;

  produtoId?: number;

  constructor(private service: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Verifico se é alteração ou inclusão
    this.produtoId = Number(this.route.snapshot.params['id']);
    if (this.produtoId) {
      service.buscarPorId(this.produtoId).subscribe(produto => {

        if (this.produtoId) {
          service.buscarPorId(this.produtoId).subscribe(produto => {
            if (produto) {
              this.produto.id = produto.id;
              this.produto.nome = produto.nome;
              this.produto.tipo = produto.tipo;
              this.produto.quantidade = produto.quantidade;
              this.produto.precounit = produto.precounit;
            }
          })
        }
      })
    }
  }



  submeter() {

    if (this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.router.navigate(['/produto']);
      })
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.router.navigate(['/produto']);
      })
    }
  }
}