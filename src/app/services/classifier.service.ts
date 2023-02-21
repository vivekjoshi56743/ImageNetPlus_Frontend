import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassifierService {

  

  private Url = 'http://localhost:5000/predict';

  constructor(private http: HttpClient) { }

  classify(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(this.Url, formData);
  }
 
}
