import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cadena: string[] = ['0', '1'];
  public total: string[] = [];
  public temporal: string[] = [];
  public contador = 0;

  public onRecursive(array: string[]) {
    let arrayNew: string[] = [];
    array.forEach((datos) => {
      const data1 = datos + '0';
      const data2 = datos + '1';
      arrayNew.push(data1);
      arrayNew.push(data2);
    });
    return arrayNew;
  }

  ngOnInit(): void {
    this.temporal = this.onRecursive(this.cadena);
  }

  public onAdd(entrada: string[]) {
    console.log(entrada);
    this.contador = 0;
    this.temporal = this.onRecursive(entrada);
    this.temporal.map((data) => {
      if (data.includes('111')) {
        this.contador++;
      }
    });
  }
}
