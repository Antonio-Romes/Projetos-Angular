import { Component } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  private numero1!: string;
  private numero2!: string | null;
  private resultado!: number | null;
  private operacao!: string | null;

  constructor(private calculadoraService: CalculadoraService) {
    this.ehLimpar();
  }

  ehLimpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  ehAdicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.ehConcatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.ehConcatenarNumero(this.numero2, numero);
    }
  }

  ehConcatenarNumero(numAtual: string | null, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    if (numConcat === '.' && numAtual === '0') {
      return '0.';
    }

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  ehDefinirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  ehCaluclar(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  get display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    if (this.numero2 !== null) {
      return this.numero2;
    }

    return this.numero1;
  }
}
