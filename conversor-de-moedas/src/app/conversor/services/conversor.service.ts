import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConversaoResponse } from '../models/conversao-response.model';
import { Conversao } from '../models/conversao.model';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private readonly BASE_URL = 'http://api.fixer.io/latest';
  constructor(private http: HttpClient) {}

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http.get<ConversaoResponse>(this.BASE_URL + params);
  }

  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    let valor = conversao.moedaPara !== undefined ? conversao.moedaPara : '0';
    return conversaoResponse.rates[valor];
  }

  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    let valor = conversao.moedaPara !== undefined ? conversao.moedaPara : '0';
    return (1 / conversaoResponse.rates[valor]).toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    let date =
      conversaoResponse.date !== undefined ? conversaoResponse.date : '';
    return date;
  }
}
