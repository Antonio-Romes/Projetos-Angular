import { Component } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrl: './listar-tarefa.component.css',
})
export class ListarTarefaComponent {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa"' + tarefa.nome + '"?')) {
      this.tarefaService.remover((tarefa.id = 0));
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
}
