import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { GestorGastosComponent } from './gestor-gastos/gestor-gastos.component';

const routes: Routes = [
  { path: '', component: InicioSesionComponent }, // Página de inicio por defecto
  { path: 'gestor-gastos', component: GestorGastosComponent } // Ruta del gestor de gastos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
