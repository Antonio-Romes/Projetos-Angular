import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private Tarefas: [] = [];
  constructor() {}

  listarTodos(): Tarefa[] {
    return this.Tarefas.length > 0 ? this.Tarefas : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push({
      id: tarefa.id,
      nome: tarefa.nome,
      concluida: tarefa.concluida,
    });
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    let tarefa = tarefas.find((tarefa) => tarefa.id === id);
    return tarefa !== undefined ? tarefa : new Tarefa();
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();

    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
  }

  remover(id: number): void {
    let tarefas = this.listarTodos();

    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas = this.listarTodos();

    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });

    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
