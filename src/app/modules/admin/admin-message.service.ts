import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {
  messages: Array<string> = [];
  subject = new Subject<Array<string>>();
  constructor() { }


  add(message: string): void {
    this.clear();
    this.messages.push(message);
    this.subject.next(this.messages);
  }

  clear() {
    this.messages = [];
  }

  addSpringErrors(error: any) {
    this.clear();
    if (error.errors?.length > 0) {
      for (let message of error.errors) {
        this.messages.push("Pole: " + message.field + "-" + message.defaultMessage);
      }
    } else {
      this.messages.push(error.message);
    }
    this.subject.next(this.messages);

  }
}
