import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the ChecklistModel provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChecklistModel {
  checklist: any;
  checklistObserver: any;
  public completed: number;

  constructor(public title: string, public createdOn: Date, public items: any[]) {
    this.title = title;
    this.createdOn = createdOn;
    this.items = items;
    this.completed = 0;

    this.items.forEach((item) => {
      if (item.checked) {
        this.completed++;
      }
    });

    this.checklist = Observable.create(observer => {
      this.checklistObserver = observer;
    });
  }

  addItem(item): void {
    this.items.push({
      title: item,
      checked: false
    });

    this.checklistObserver.next(true);
  }

  removeItem(item): void {
    let index = this.items.indexOf(item);
    if (index > -1) {
      if (item.checked) {
        this.completed--;
      }
      this.items.splice(index, 1);
    }

    this.checklistObserver.next(true);
  }


  renameItem(item, title): void {
    let index = this.items.indexOf(item);

    if (index > -1) {
      this.items[index].title = title;
    }

    this.checklistObserver.next(true);
  }

  setTitle(title): void {
    this.title = title;
    this.checklistObserver.next(true);
  }

  toggleItem(item): void {
    if (item.checked) {
      this.completed--;
    } else {
      this.completed++;
    }

    item.checked = !item.checked;
    this.checklistObserver.next(true);
  }
}

