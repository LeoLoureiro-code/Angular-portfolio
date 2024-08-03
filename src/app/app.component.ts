import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component'
import { HeaderComponent as HeaderComponent } from "../components/header/header.component";
import { AboutComponent } from "../components/about/about.component";
import { ProjectsComponent } from "../components/projects/projects.component";
import { ContactComponent } from "../components/contact/contact.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, HeaderComponent, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'personal-portfolio';

  constructor() {
    
  }


}

