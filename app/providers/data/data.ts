import { Injectable } from '@angular/core';
import {Storage, SqlStorage } from 'ionic-angular';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  storage: Storage;

  constructor() {
    this.storage = new Storage(SqlStorage, { name: 'checklist' });
  }

  getData(): Promise<any> {
    return this.storage.get('checklist');
  }

  save(data): void {
    let saveData = [];

    //Remove Observables
    data.forEach((checklist) => {
      saveData.push({
        title: checklist.title,
        items: checklist.items,
        createdOn: checklist.createdOn
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('checklist', newData);
  }
}

