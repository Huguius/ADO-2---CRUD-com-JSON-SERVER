import { Component, OnInit } from '@angular/core';
import { Produtos } from '../../services/types/types';
import { ProdutosService } from '../../services/produtos.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-manutencao-produtos',
  imports: [RouterLink],
  templateUrl: './manutencao-produtos.component.html',
  styleUrl: './manutencao-produtos.component.css'
})

export class ManutencaoProdutosComponent implements OnInit {

  listaProdutos: Produtos[] = [];

  constructor(private service: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((produto) => {
      this.listaProdutos = produto;
    })
  }
  

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }
}