import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Http, Response, Headers } from "@angular/http";

import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { ActivatedRoute } from '@angular/router';

import { MangaService } from "./manga.service";

@Component({
  selector: "reserva-create",
  templateUrl: "./reserva-component.html",
  styleUrls: ["./reserva-component.css"],
})
export class ReservaComponent {
  Data: any[];

  constructor(private mangaService: MangaService, private http: Http, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.mangaService.getReservas().subscribe(
      (data) => {
        this.Data = data;
      },
      (error) => {
        console.error("Erro ao obter a lista de itens:", error);
      }
    );
  }
  
  removeReserva(livro: String) {
    this.mangaService.removeReserva(livro)
      .subscribe(
        (data) => {
          this.Data = data;
          console.log(data)
          // Faça algo com a lista de itens aqui
        },
        (error) => {
          console.error('Erro ao obter a lista de itens:', error);
        }
      );
  }
}
