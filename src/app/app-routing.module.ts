import { AuthService } from './services/auth.service';
import { CourseItemComponent } from './views/courses/course-item/course-item.component';
import { CoursesComponent } from './views/courses/courses.component';
import { OrdersComponent } from './views/orders/orders.component';
import { AdminComponent } from './views/admin/admin.component';
import { CartComponent } from './views/cart/cart.component';
import { AboutComponent } from './views/about/about.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthService] },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
