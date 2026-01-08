import { Component, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cloudOfflineOutline,
  locationOutline,
  shieldCheckmarkOutline,
  peopleOutline,
  codeSlashOutline,
  serverOutline,
  schoolOutline,
  checkmarkCircle,
  imagesOutline,
  videocamOutline,
  newspaperOutline,
  mailOutline,
  logoLinkedin
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
  ],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  constructor() {
    addIcons({
      cloudOfflineOutline,
      locationOutline,
      shieldCheckmarkOutline,
      peopleOutline,
      codeSlashOutline,
      serverOutline,
      schoolOutline,
      checkmarkCircle,
      imagesOutline,
      videocamOutline,
      newspaperOutline,
      mailOutline,
      logoLinkedin
    });
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
