import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';

enum Esection{
  galerry = '1',
  about = '2',
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabMenuModule, ButtonModule, GalleryComponent,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items!: MenuItem[];

  public activeItem: MenuItem | undefined;
  public section: string | undefined = Esection.galerry;

  ngOnInit() {
      this.items = [
          { id: '1', label: 'Galeria', icon: 'pi pi-camera' },
          { id: '2', label: 'Sobre', icon: 'pi pi-info-circle' },
      ];

      this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
      this.activeItem = event;
      this.section = event.id;
  }
}