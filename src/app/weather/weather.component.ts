import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  zipCode: String;
  postObject: String[];

  constructor(private http: Http) { 
  }
  ngOnInit() {
      }

      getTemp(){
        this.http.get('http://localhost:8080/WeatherData/getTemperature.action')
        .subscribe(response => {
           if(this.zipCode == "64468"){
             this.postObject = response.json();
             this.zipCode = "";
             console.log(this.postObject);
          }
          else{
            alert('unknown');
            this.zipCode = "";
          }
        });
      }

      getTemperature(f){
        this.http.get('http://localhost:8080/WeatherData/getTemperature.action')
       .subscribe(response => {
          if(f.zipCode == "64468"){
            this.postObject = response.json();
            console.log(response);
         }
         else{
           alert('unknown');
         }
       });
        console.log(f.zipCode);
      }
}
