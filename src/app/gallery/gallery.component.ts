import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

enum Esection{
  mural = '0',
  galerry = '1',
  about = '2',
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TabMenuModule, ButtonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items!: MenuItem[];

  public activeItem: MenuItem | undefined;
  public section: string | undefined = Esection.mural;

  ngOnInit() {
      this.items = [
          { id: '0', label: 'Mural', icon: 'pi pi-image' },
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