import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrartarefasComponent } from './cadastrar';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrartarefasComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService],
  exports: [ListarTarefaComponent],
})
export class TarefasModule {}
