import { Routes } from '@angular/router'
import { HomeComponent } from './componentes/home/home.component'
import { MenuComponent } from './componentes/menu/menu.component'
import { NavbarComponent } from './componentes/navbar/navbar.component'
import { HeaderComponent } from './componentes/header/header.component'
import { FooterComponent } from './componentes/footer/footer.component'
import { ContactoComponent } from './componentes/contacto/contacto.component'
import { QuienesSomosComponent } from './componentes/quienes-somos/quienes-somos.component'
import { LoginComponent } from './componentes/login/login.component'
import { RegistrarComponent } from './componentes/registrar/registrar.component'


export const routes: Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'menu', component: MenuComponent},
    {path : 'navbar', component: NavbarComponent},
    {path : 'header', component: HeaderComponent},
    {path : 'footer', component: FooterComponent},
    {path : 'contacto', component: ContactoComponent},
    {path : 'quienessomos', component: QuienesSomosComponent},
    {path : 'login', component: LoginComponent},
    {path : 'registrar', component: RegistrarComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
