import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../app/components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  bsModalRef: BsModalRef;

  constructor(private bsModalService: BsModalService) { }

  alert(image: string, tags: string, views: string, likes: string): Observable<string> {
    const initialState = {
      image,
      tags,
      views,
      likes
    };
    this.bsModalRef = this.bsModalService.show(ModalComponent, { initialState });

    return new Observable<string>(this.getAlertSubscriber());
  }

  private getAlertSubscriber() {
    return (observer) => {
      const subscription = this.bsModalService.onHidden.subscribe((reason: string) => {
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      }
    }
  }
}

