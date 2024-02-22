import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stars: number[] = [1, 2, 3, 4, 5];
  pass: boolean;
  end: boolean;
  selectedValue: number;
  selectedValueActitud: number;
  selectedValuePuntualidad: number;
  selectedValueCreatividad: number;
  selectedValueDominio: number;
  textoareas: string;

  constructor(private http: HttpClient) {
    this.pass = false
    this.end = false
    this.selectedValue = 0;
    this.selectedValueActitud = 0;
    this.selectedValuePuntualidad = 0;
    this.selectedValueCreatividad = 0;
    this.selectedValueDominio = 0;
    this.textoareas = "a";
  }

  ngOnInit() {
  }

  async countStar(star: number) {
    this.selectedValue = star;
    await new Promise(f => setTimeout(f, 500));
    this.pass = true;
    console.log('Value of star', star);
  }

  countStarPuntualidad(star: number) {
    this.selectedValuePuntualidad = star;
    console.log('Value of star', star);
  }

  countStarActitud(star: number) {
    this.selectedValueActitud = star;
    console.log('Value of star', star);
  }

  countStarCreatividad(star: number) {
    this.selectedValueCreatividad = star;
    console.log('Value of star', star);
  }

  countStarDominio(star: number) {
    this.selectedValueDominio = star;
    console.log('Value of star', star);
  }

  send(extra: string) {
    this.http.post("https://webhook.site/5c933dfd-b302-409d-9d47-7a294cee04c3", { 'general': this.selectedValue, 'puntualidad': this.selectedValuePuntualidad, 'actitud': this.selectedValueActitud, 'creatividad': this.selectedValueCreatividad, 'dominio': this.selectedValueDominio, 'comments': extra}).subscribe(() => {
      alert("Gracias por dejar su opinión.")
      this.end = true
    });
  }
}
