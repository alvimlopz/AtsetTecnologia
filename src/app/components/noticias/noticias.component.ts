import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  noticias = [
    {
      imagem: '/mulher.png',
      titulo: 'Brasil lidera crescimento em TI e projeta 147 mil novas vagas em 2025.'
    },
    {
      imagem: '/caminhao.png',
      titulo: 'VW Caminhões e Ônibus reduz tempo de desenvolvimento com automação da UiPath'
    },
    {
      imagem: '/homen.png',
      titulo: '"Vibe coding": nova tendência em desenvolvimento de software com IA'
    }
  ];
}