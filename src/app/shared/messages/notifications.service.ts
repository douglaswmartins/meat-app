import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NotificationsService {

  notifier = new EventEmitter<string>()

  constructor() { }

  notify(message: string) {
    this.notifier.emit(message)
  }

}
