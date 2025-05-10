import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { CtaComponent } from './components/cta/cta.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { TrabalheConoscoComponent } from './components/trabalhe-conosco/trabalhe-conosco.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, SobreComponent, ServicosComponent, CtaComponent, FormularioComponent, TecnologiasComponent, TrabalheConoscoComponent, NoticiasComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atsetTecnologia';
}
