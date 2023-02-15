import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassifierService {

  

  private lambdaUrl = 'your_lamda url';

  constructor(private http: HttpClient) { }

  classify(image: File) {
    // Create a FormData object to send the file as a binary body
    const formData = new FormData();
    formData.append('image', image);

    // Send a POST request to the Lambda function with the FormData as the body
   
    const res=this.http.post(this.lambdaUrl, formData);
    //console.log(res);
    return res;
  }
 
}
