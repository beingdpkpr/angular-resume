/* --- Angular --- */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

/* --- Other Components --- */
import { ContactComponent } from './components/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { EducationComponent } from './components/education/education.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'works', component: WorksComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatTabsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    HeaderComponent,
    ContentComponent
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContentComponent,
    PortfolioComponent,
    ContactComponent,
    SkillsComponent,
    WorksComponent,
    EducationComponent,
    ErrorComponent
  ]
})
export class MaterialModule { }
