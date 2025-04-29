import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  exibirlogo: boolean = true;

  itensMenu = [
    { label: 'Jardim', link: '' },
    { label: 'Cadastro', link: '/produto/incluir' },
    { label: 'Login', link: '/produto/login' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Ajuda', link: '/ajuda' },

  ]
}
