import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {

  constructor() { }

  classify(image:File){
    const formData=new FormData();
    formData.append('image',image);
    
  } 
 
}
