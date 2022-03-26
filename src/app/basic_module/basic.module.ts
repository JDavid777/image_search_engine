import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    PaginatorComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    PaginatorComponent,
  ],
})
export class BasicModule {}
