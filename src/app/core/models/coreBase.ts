import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TAdress } from 'src/app/shared/models/address.models';

export class CoreBase {
  public isNotNullOrUndefined(item: any): boolean {
    return item != null && item != undefined;
  }

  public isNotEmpty(item: string): boolean {
    return this.isNotNullOrUndefined(item) && item != '';
  }

  public isItemHasValue(item: number): boolean {
    return item != null && item != undefined && item > 0;
  }

  public decodeBase64ToJson(permission: string): any {
    return JSON.parse(atob(permission));
  }

  public getInitialsName(fullName: string): string {
    if (this.isNotEmpty(fullName)) {
      let splitName = fullName.split(' ');
      let firstName = splitName[0];
      let lastName = splitName[splitName.length - 1];
      let firstLetter = firstName.substr(0, 1);
      let sencondLetter = lastName.substr(0, 1);

      if (this.isNotEmpty(firstLetter) && this.isNotEmpty(sencondLetter))
        return `${firstLetter.toLocaleUpperCase()}${sencondLetter.toLocaleUpperCase()}`;
    }
    return '';
  }

  public concatImageBase64(image: string): string {
    if (this.isNotEmpty(image)) return `data:image/png;base64,${image}`;
    else return '';
  }

  public convertUrlToBase64(url: string) {
    return fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );
  }

  public convertBlobToBase64(blob: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  public buildFormAddress() {
    return new FormGroup({
      cep: new FormControl('', [Validators.required]),    
      number: new FormControl('', [Validators.required]),        
    });
  }

  public buildFormbillingAddress() {
    return new FormGroup({
      cep: new FormControl(''),    
      number: new FormControl(''),    
     
    });
  }

  public loadFormAddress(address: TAdress, form: any): void {
    form.controls.address.patchValue({
      cep: address.cep,      
      number: String(address.number),
    });    
    return form;
  }
}
