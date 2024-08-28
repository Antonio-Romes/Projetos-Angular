import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrartarefasComponent } from './cadastrar';

const routes: Routes = [
  {
    path: 'tarefas',
    children: [
      {
        path: '',
        component: ListarTarefaComponent,
      },
      {
        path: 'tarefas/listar',
        component: ListarTarefaComponent,
      },
      {
        path: 'tarefas/cadastar',
        component: CadastrartarefasComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefasRoutingModule {}
