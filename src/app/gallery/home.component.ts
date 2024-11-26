import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';

enum Esection {
  galerry = '1',
  about = '2',
}

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabMenuModule, ButtonModule, GalleryComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public items!: MenuItem[];
  public data: Item[] = [
    {
      imageSrc: 'assets/images/cesta.jpg',
      imageAlt: '1',
    },
    {
      imageSrc: 'assets/images/montanha.jpg',
      imageAlt: '2',
    },
    {
      imageSrc: 'assets/images/navio.jpg',
      imageAlt: '3',
    },
    {
      imageSrc: 'assets/images/galleria7.jpg',
      imageAlt: '4',
    },
    {
      imageSrc: 'assets/images/galleria8.jpg',
      imageAlt: '5',
    },
    {
      imageSrc: 'assets/images/galleria9.jpg',
      imageAlt: '6',
    },
    {
      imageSrc: 'assets/images/galleria10.jpg',
      imageAlt: '7',
    },
    {
      imageSrc : 'https://images.unsplash.com/photo-1732601471612-213023f569d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '8'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '9'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642670310920-6f4e3a3adee3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      imageAlt: '10'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642570517818-99c0fd6f0349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      imageAlt: '11'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642649149963-0ef6779df6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '12'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642618215095-3523a9a36893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      imageAlt: '13'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      imageAlt: '14'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '15'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80',
      imageAlt: '16'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      imageAlt: '17'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '18'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '19'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: '20'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      imageAlt: '21'
    },
    {imageSrc: 'https://plus.unsplash.com/premium_photo-1661766896016-16e307246d5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt:'22'}
    
  ];

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
