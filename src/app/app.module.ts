import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // ✅ Importar rutas
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { GestorGastosComponent } from './gestor-gastos/gestor-gastos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    GestorGastosComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, // ✅ Asegúrate de importar esto
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase) // Si usas Firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
