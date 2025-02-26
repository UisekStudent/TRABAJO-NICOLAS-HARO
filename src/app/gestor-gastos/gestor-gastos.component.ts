import { Component } from '@angular/core';

@Component({
  selector: 'app-gestor-gastos',
  templateUrl: './gestor-gastos.component.html',
  styleUrls: ['./gestor-gastos.component.css']
})
export class GestorGastosComponent {
  
  categorias: string[] = ['Alimentos', 'Transporte', 'Entretenimiento'];
  gastos: any[] = [];
  nuevaCategoria: string = '';
  nuevoGasto = { nombre: '', cantidad: 0, categoria: '' };
  filtroCategoria: string = '';
  orden: string = 'nombre'; // Campo por el que se ordenará
  totalGastos: number = 0;

  agregarCategoria() {
    if (this.nuevaCategoria.trim() && !this.categorias.includes(this.nuevaCategoria)) {
      this.categorias.push(this.nuevaCategoria);
      this.nuevaCategoria = '';
    }
  }

  eliminarCategoria(cat: string) {
    this.categorias = this.categorias.filter(c => c !== cat);
    this.gastos = this.gastos.filter(g => g.categoria !== cat); // Eliminar gastos asociados
  }

  agregarGasto() {
    if (this.nuevoGasto.nombre && this.nuevoGasto.cantidad > 0 && this.nuevoGasto.categoria) {
      this.gastos.push({ ...this.nuevoGasto });
      this.nuevoGasto = { nombre: '', cantidad: 0, categoria: '' };
      this.calcularTotal();
    }
  }

  eliminarGasto(index: number) {
    this.gastos.splice(index, 1);
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalGastos = this.gastos.reduce((sum, gasto) => sum + gasto.cantidad, 0);
  }

  obtenerTotalPorCategoria(cat: string): number {
    return this.gastos.filter(g => g.categoria === cat).reduce((sum, gasto) => sum + gasto.cantidad, 0);
  }

  filtrarGastos() {
    return this.filtroCategoria 
      ? this.gastos.filter(g => g.categoria === this.filtroCategoria)
      : this.gastos;
  }

  ordenarGastos() {
    return this.filtrarGastos().sort((a, b) => a[this.orden] > b[this.orden] ? 1 : -1);
  }
}
