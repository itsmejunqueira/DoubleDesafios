import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
  Input,
} from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Directive({ selector: '[currencyInput]' })
export class CurrencyInputDirective implements OnInit {
  private regexString(max?: number) {
    const maxStr = max ? `{0,${max}}` : `+`;
    return `^(\\d${maxStr}(\\.\\d{0,2})?|\\.\\d{0,2})$`;
  }
  private digitRegex!: RegExp;
  private setRegex(maxDigits?: number) {
    this.digitRegex = new RegExp(this.regexString(maxDigits), 'g');
  }
  @Input()
  set maxDigits(maxDigits: number) {
    this.setRegex(maxDigits);
  }

  private el: any | HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
    this.setRegex();
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value, 'BRL');
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value: any) {
    this.el.value = value.replace(/[^0-9.]+/g, '');
    this.el.select();
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: any) {
    this.el.value = this.currencyPipe.transform(value, 'BRL');
  }

  @HostListener('keydown.control.z', ['$event.target.value'])
  onUndo(value: any) {
    this.el.value = '';
  }

  private lastValid = '';
  @HostListener('input', ['$event'])
  onInput(event: any) {
    const cleanValue = (event.target.value.match(this.digitRegex) || []).join(
      ''
    );
    if (cleanValue || !event.target.value) this.lastValid = cleanValue;
    this.el.value = cleanValue || this.lastValid;
  }
}
