import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor() { }
  private subject = new Subject<any>();

  sendMessage(object: Object) {
    this.subject.next({ obj: object });
}

getMessage(): Observable<any> {
  return this.subject.asObservable();
}
}
