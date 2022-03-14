import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServicesComponent } from './section/services/services.component';
import { PortfolioComponent } from './section/portfolio/portfolio.component';
import { AboutComponent } from './section/about/about.component';
import { MeetsComponent } from './section/meets/meets.component';
import { BlogComponent } from './section/blog/blog.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './section/login/login.component';
import { RegisterComponent } from './section/register/register.component';
const routes: Routes =[
  // {path:'section',component:SectionComponent},
  // {path:'services',component:ServicesComponent},
  // {path:'about',component:},
  // {path:'techs',component:},
  {path:'',component:ServicesComponent},
  {path:'services',component:ServicesComponent},
   {path:'portfolio',component:PortfolioComponent},
   {path:'about',component:AboutComponent},
   {path:'team',component:MeetsComponent},
   {path:'blog',component:BlogComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},

  //{path:'section',component:SectionComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    MeetsComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
