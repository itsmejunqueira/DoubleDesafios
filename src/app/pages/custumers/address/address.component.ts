import { TAdress, THeader } from '../../../shared/models/address.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  public selectedBodyData: TAdress[] = [
    {
      cep: '04257-100',
      street: 'R. Antônio Gomes Ferreira',
      number: '358',
      city: 'Campinas (SP)',
      state: 'SP',
    },
    {
      cep: '04257-100',
      street: 'R. Afonso Celso',
      number: '087',
      city: 'Campinas (SP)',
      state: 'SP',
    },
    {
      cep: '04257-100',
      street: 'Av. Fagundes Filho',
      number: '0834',
      city: 'Campinas (SP)',
      state: 'SP',
    },
    {
      cep: '04257-100',
      street: 'R. das Aroeiras',
      number: '9451',
      city: 'São Paulo (SP)',
      state: 'SP',
    },
    {
      cep: '04257-100',
      street: 'R. Gonçalo da Cunha',
      number: '8753',
      city: 'São Paulo (SP)',
      state: 'SP',
    },
    {
      cep: '04257-100',
      street: 'Alameda Joaquim Eugênio de Lima',
      number: '0754',
      city: 'Ribeirão Preto (SP)',
      state: 'SP',
    },
  ];
  public selectedHeaderItems: THeader[] = [
    {
      canSort: true,
      isSorted: true,
      label: 'Cep',
    },
    {
      canSort: true,
      isSorted: true,
      label: 'Rua',
    },
    {
      canSort: true,
      isSorted: true,
      label: 'Número',
    },
    {
      canSort: true,
      isSorted: true,
      label: 'Cidade',
    },
    {
      canSort: true,
      isSorted: true,
      label: 'Estado',
    },
  ];
  public isAsc: boolean = true;
  public search: string = '';
  public selectedBodyDataBkp: TAdress[] = [];

  constructor() {}

  ngOnInit(): void {
    this.sort();
    this.selectedBodyDataBkp = JSON.parse(
      JSON.stringify(this.selectedBodyData)
    );
  }

  public createAdress() {
    let cepArray: string[] = [];
    while (cepArray.length < 3) {
      const cep = '04257-10' + this.randomIntFromInterval(1, 5);
      if (!cepArray.includes(cep)) cepArray.push(cep);
    }
    if (!this.selectedBodyData.find((x) => x.cep == cepArray[0]))
      this.selectedBodyData.push({
        cep: cepArray[0],
        street: 'R. Gomes Antônio Ferreira',
        number: '358',
        city: 'Campinas (SP)',
        state: 'SP',
      });
      if (!this.selectedBodyData.find((x) => x.cep == cepArray[1]))
      this.selectedBodyData.push({
        cep: cepArray[1],
        street: 'R. Ferreira Antônio Gomes',
        number: '359',
        city: 'Ribeirão Preto (SP)',
        state: 'SP',
      });
      if (!this.selectedBodyData.find((x) => x.cep == cepArray[2]))
      this.selectedBodyData.push({
        cep: cepArray[2],
        street: 'R. Antônio Ferreira Gomes',
        number: '355',
        city: 'Ribeirão Pires (SP)',
        state: 'SP',
      });
  }
  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public removeAdress() {
    this.selectedBodyData.splice(this.selectedBodyData.length - 1, 1);
  }

  public sort(): void {
    this.isAsc = !this.isAsc;
    if (this.isAsc)
      this.selectedBodyData.sort((a, b) => a.street.localeCompare(b.street));
    else this.selectedBodyData.sort((a, b) => b.street.localeCompare(a.street));
  }

  public searchByString(): void {
    if (this.search)
      this.selectedBodyData = this.selectedBodyDataBkp.filter(
        (x) =>
          this.compareString(x.street, this.search) ||
          this.compareString(x.number, this.search) ||
          this.compareString(x.city, this.search) ||
          this.compareString(x.state, this.search)
      );
    else this.clearFilter();
  }
  compareString(str: string, str2: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLocaleLowerCase()
      .includes(
        str2
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLocaleLowerCase()
      );
  }

  clearFilter() {
    this.selectedBodyData = JSON.parse(
      JSON.stringify(this.selectedBodyDataBkp)
    );
  }
}
