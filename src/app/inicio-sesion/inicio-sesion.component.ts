import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // ✅ Importa el Router

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  items: Observable<any[]>;

  form = new FormGroup({
    correo: new FormControl(),
    pass: new FormControl(),
  });

  constructor(private firestore: AngularFirestore, private router: Router) { // ✅ Agrega Router aquí
    this.items = this.firestore.collection('InicioSesion').valueChanges();
    this.items.subscribe((data) => {
      console.log("Datos en Firestore:", data);
    });
  }

  ngOnInit(): void { }

  // 📌 REGISTRAR USUARIO
  registrarUsuario() {
    const nuevoUsuario = this.form.value;

    this.firestore.collection('InicioSesion').add(nuevoUsuario)
      .then(() => {
        console.log('✅ Usuario registrado en Firestore');
        alert('Usuario registrado correctamente');
        this.form.reset();
      })
      .catch(error => {
        console.error('❌ Error al registrar usuario:', error);
        alert('Error al registrar usuario');
      });
  }

  // 📌 INICIAR SESIÓN
  iniciarSesion() {
    const { correo, pass } = this.form.value;

    this.firestore.collection('InicioSesion', ref => ref.where('correo', '==', correo))
      .valueChanges()
      .subscribe(usuarios => {
        if (usuarios.length > 0) {
          const usuario = usuarios[0] as any;
          if (usuario.pass === pass) {
            console.log('✅ Inicio de sesión exitoso');
            alert('Inicio de sesión exitoso');
            
            // 🔥 Redirige a Gestor de Gastos
            this.router.navigate(['/gestor-gastos']); 
            
          } else {
            console.log('❌ Contraseña incorrecta');
            alert('Contraseña incorrecta');
          }
        } else {
          console.log('❌ Usuario no encontrado');
          alert('Usuario no encontrado');
        }
      }, error => {
        console.error('❌ Error al iniciar sesión:', error);
        alert('Error al iniciar sesión');
      });
  }
}
