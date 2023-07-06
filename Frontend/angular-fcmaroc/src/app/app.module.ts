import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { SpielbetriebComponent } from './components/spielbetrieb/spielbetrieb.component';
import { HttpClientModule } from '@angular/common/http';
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'spielbetrieb', component: SpielbetriebComponent },
  { path: 'impressum', component: ImpressumComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    SpielbetriebComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
