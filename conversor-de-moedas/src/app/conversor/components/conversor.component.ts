import { Component } from '@angular/core';
import { MoedaService } from '../services/moeda.service';
import { ConversorService } from '../services/conversor.service';
import { Moeda } from '../models/moeda.model';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.css',
})
export class ConversorComponent {
  Moedas: Moeda[];

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) {
    this.Moedas = this.moedaService.listarTodas();
  }
}
