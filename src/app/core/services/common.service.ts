import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RequestsService } from './request.service';
import { FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CommonService {
  constructor(private _requestService: RequestsService) {}

  public checkIsMobile(): boolean {
    return window.innerWidth < 768;
  }

  // public async getAddressByZipCode(zipcode: string): Promise<any> {
  //   return await lastValueFrom(
  //     this._requestService.getAddressByZipCode(zipcode)
  //   );
  // }

  public checkFormInvalidField(controls: any): void {
    for (const name in controls) {
      if (controls[name].invalid) {
      }
    }
  }

  public getStates() {
    return [
      { id: 1, value: 'AC' },
      { id: 2, value: 'AL' },
      { id: 3, value: 'AP' },
      { id: 4, value: 'AM' },
      { id: 5, value: 'BA' },
      { id: 6, value: 'CE' },
      { id: 7, value: 'DF' },
      { id: 8, value: 'ES' },
      { id: 9, value: 'GO' },
      { id: 10, value: 'MA' },
      { id: 11, value: 'MS' },
      { id: 12, value: 'MT' },
      { id: 13, value: 'MG' },
      { id: 14, value: 'PA' },
      { id: 15, value: 'PB' },
      { id: 16, value: 'PR' },
      { id: 17, value: 'PE' },
      { id: 18, value: 'PI' },
      { id: 19, value: 'RJ' },
      { id: 20, value: 'RN' },
      { id: 21, value: 'RS' },
      { id: 22, value: 'RO' },
      { id: 23, value: 'RR' },
      { id: 24, value: 'SC' },
      { id: 25, value: 'SP' },
      { id: 26, value: 'SE' },
      { id: 27, value: 'TO' },
    ];
  }

  public userPerfil() {
    return [
      { id: 1, value: 'Administrador' },
      { id: 2, value: 'Co-administrador' },
      { id: 3, value: 'Vendedor' },
    ];
  }

  public getPhoneCompany() {
    return [
      { id: 1, value: 'Claro' },
      { id: 2, value: 'OI' },
      { id: 3, value: 'Tim' },
      { id: 4, value: 'Vivo' },
      { id: 5, value: 'Nextel' },
      { id: 6, value: 'Outros' },
    ];
  }

  public getVariations() {
    return [
      {
        id: 1,
        name: 'Caixa',
      },
      {
        id: 2,
        name: 'Unidade',
      },
      {
        id: 3,
        name: 'Peça',
      },
    ];
  }

  public getBankAccountType() {
    return [
      { id: 1, value: 'Conta corrente' },
      { id: 2, value: 'Conta poupança' },
    ];
  }

  
  public getSeasonalityTypes() {
    return [{ id: 1, value: 'Notas faturadas entre o dia 1° ao dia 31°' }];
  }

  public getComissionTypes() {
    return [{ id: 1, value: 'Categorias de produtos vendidos' }];
  }
  public getTaxpayer() {
    return [
      { id: 1, value: '1 - Contribuinte ICMS' },
      {
        id: 2,
        value:
          '2 - Contribuinte isento de Inscrição no Cadastro de Contribuintes',
      },
      {
        id: 3,
        value:
          '9 - Não contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes',
      },
    ];
  }
  public getRegimeCode() {
    return [
      { id: 1, value: 'Não definido' },
      {
        id: 2,
        value: 'Simples nacional',
      },
      {
        id: 3,
        value: 'Regime normal',
      },
    ];
  }

  public getFrequency() {
    return [
      {
        id: 1,
        name: 'Quinzenal',
      },
      {
        id: 2,
        name: 'Mensal',
      },
      {
        id: 3,
        name: 'Anual',
      },
    ];
  }

  // public getFormPayment() {
  //   return [
  //     {
  //       id: PaymentOptionsEnum.Cash,
  //       name: 'Dinheiro',
  //     },
  //     {
  //       id: PaymentOptionsEnum.DebitCard,
  //       name: 'Cartáo Débito',
  //     },
  //     {
  //       id: PaymentOptionsEnum.CreditCard,
  //       name: 'Cartáo Crédito',
  //     },
  //     {
  //       id: PaymentOptionsEnum.Slip,
  //       name: 'Boleto',
  //     },
  //     {
  //       id: PaymentOptionsEnum.Check,
  //       name: 'Cheque',
  //     },
  //     {
  //       id: PaymentOptionsEnum.Pix,
  //       name: 'PIX',
  //     },
  //   ];
  // }
  public filterValueTooltip(text: string, element: HTMLElement): string {
    const width: number = element.offsetWidth / 9;
    return text ? (text.length < width ? '' : text) : '';
  }

  public overflowContent(text: string, element: HTMLElement): string {
    const width: number = element.offsetWidth / 9;
    return text
      ? text.length > width
        ? `${text.substring(0, width)}...`
        : text
      : '';
  }

  public clearAndUpdateValidation(formcontrol: string, form: FormGroup) {
    form.get(formcontrol)?.clearValidators();
    form.get(formcontrol)?.updateValueAndValidity();
    return formcontrol;
  }

  public setValidation(formcontrol: string, form: FormGroup) {
    form.get(formcontrol)?.setValidators([Validators.required]);
    form.get(formcontrol)?.updateValueAndValidity();
    return formcontrol;
  }
}
