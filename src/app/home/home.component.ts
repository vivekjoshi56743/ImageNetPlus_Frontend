import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassifierService } from '../services/classifier.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    constructor(private classifierService: ClassifierService) { }
    image!: File;
    view!: string;
    result!: string;
    onsubmit(formref: any) {
        this.classifierService.classify(this.image).subscribe((response: any) => {
            // Handle the response from the Lambda function
            console.log(response);
            this.result = response;
        });
    }

    onselect(event: any) {
        this.image = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            this.view = reader.result as string;
        }
        reader.readAsDataURL(this.image);


    }
    
}
