import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefaComponent } from './tarefas/listar';
import { CadastrartarefasComponent, EditarTarefaComponent } from './tarefas';

const routes: Routes = [
  {
    path: '',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrartarefasComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
