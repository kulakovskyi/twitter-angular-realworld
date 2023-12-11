import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {

  set(key: string, data: any){
    try{
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e){
      console.log('Error saving to local storage', e)
    }
  }

  get(key: string): any{
    try {
      return JSON.parse(localStorage.getItem(key) as string)
    } catch (e){
      console.error('Error getting data from local Storage', e)
      return null
    }
  }


  constructor() { }
}
