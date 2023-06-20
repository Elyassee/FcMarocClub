import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SpielbetriebComponent } from './spielbetrieb/spielbetrieb.component';
import { VereinComponent } from './verein/verein.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'Spielbetrieb', component: SpielbetriebComponent },
  { path: 'Verein', component: VereinComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    SpielbetriebComponent,
    VereinComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
