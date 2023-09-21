import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DepositosComponent } from './pages/depositos/depositos.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { GirosComponent } from './pages/giros/giros.component';
import { CtaCorrienteComponent } from './pages/cta-corriente/cta-corriente.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'depositos', component: DepositosComponent},
  { path: 'prestamos', component: PrestamosComponent},
  { path: 'giros', component: GirosComponent},
  { path: 'cta-corriente', component: CtaCorrienteComponent},
  { path: '**', redirectTo: 'home'}   //redirige las paginas que no existe al home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
