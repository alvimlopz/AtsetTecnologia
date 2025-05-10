import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule], // ✅ Adicione esta linha
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
  servicos = [
    { imagem: '/webdev.png', titulo: 'Desenvolvimento Web' },
    { imagem: '/site.png', titulo: 'Criação de Sites' },
    { imagem: '/api.png', titulo: 'API e Microserviços' },
    { imagem: '/suporte.png', titulo: 'Manutenção e Suporte' },
    { imagem: '/integracao.png', titulo: 'Integração de Sistemas' },
    { imagem: '/uxui.png', titulo: 'UX/UI Design' }
  ];
}
