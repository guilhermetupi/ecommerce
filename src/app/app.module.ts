import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';

import { AboutComponent } from './views/about/about.component';
import { AdminComponent } from './views/admin/admin.component';
import { CartComponent } from './views/cart/cart.component';
import { CoursesComponent } from './views/courses/courses.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { OrdersComponent } from './views/orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CourseItemComponent } from './views/courses/course-item/course-item.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    CartComponent,
    CoursesComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    CourseItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
