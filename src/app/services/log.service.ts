import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logMessage(msg:string):void{
    console.log("🚀 ~ file: log.service.ts:11 ~ LogService ~ logMessage ~ msg:", msg)
  }
}
