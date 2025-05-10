import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true, // <--- ESSENCIAL!
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent { }
