import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})

export class BindingComponent
{
  public edadUno: string | null = "";
  public edadDos: string | null = "";
  public promedio: number | null = 0;
  public suma: number | null = 0;

  calcularPromedio() {
    var edadUnoValor = this.edadUno ?? "";
    var edadDosValor = this.edadDos ?? "";
  
    this.suma = parseInt(edadUnoValor) + parseInt(edadDosValor);
    this.promedio = this.suma / 2; // Cambiar a la cantidad real de edades si es necesario
  }

  limpiarCampos() {
    this.edadUno = null;
    this.edadDos = null;
    this.promedio = null;
    this.suma = null;
  }
}
