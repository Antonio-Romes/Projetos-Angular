import { Component, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms';
import { Router } from 'express';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrartarefas',
  templateUrl: './cadastrartarefas.component.html',
  styleUrl: './cadastrartarefas.component.css',
})
export class CadastrartarefasComponent {
  @ViewChild('formTarefa') formTarefa!: NgForm;
  tarefa: Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) {
    this.tarefa = new Tarefa();
  }

  cadastar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
    }
  }
}
