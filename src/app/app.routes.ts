import { Routes } from '@angular/router';
import { ManutencaoProdutosComponent } from './pages/manutencao-produtos/manutencao-produtos.component';
import { ProdutoFormComponent } from './pages/produto-form/produto-form.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title:'Home'
    },
    {
        path:'produto/login',
        component: LoginComponent,
        title:'Login'
    },
    {
        path: 'produto',
        component: ManutencaoProdutosComponent,
        title: 'Lista de manutenção de produtos'
    },
    {
        path: 'produto/incluir',
        component: ProdutoFormComponent,
        title: 'Produto - Incluir'
    },
    {
        path: 'produto/alterar/:id',
        component: ProdutoFormComponent,
        title: 'Produto -'
    }

];
