import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

const api = "https://api.jikan.moe/v4/";

@Injectable()
export class MangaService {
  constructor(private http: Http) {}

  removeReserva(id: String) {
    return this.http
      .delete("http://localhost:3000/reserva/removeReserva/"+id, )
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        alert(jsonData.message)
        return jsonData.message;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  addToReserva(book: any) {
    const bodyReq = JSON.stringify(book);

    return this.http
      .post("http://localhost:3000/reserva/addToReserva", book)
      .subscribe(
        (response) => {
          const jsonData = response; // Faça algo com a resposta do servidor
          console.log(jsonData);
        },
        (error) => {
          console.error(error); // Trate qualquer erro que ocorrer
        }
      );
  }

  getReservas() {
    return this.http
      .get("http://localhost:3000/reserva/lista")
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        console.log(jsonData)
        return jsonData.books;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  getMangas() {
    return this.http
      .get("http://localhost:3000/manga/getMangas")
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        return jsonData.mangas;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  getManga(name: String): Promise<any> {
    return new Promise((resolve, reject) => {
      // anime?q=${text.split(" ").join("+")}&limit=18
      this.http.get(api + "manga?q=" + name + "&limit=10").subscribe(
        (data) => {
          const jsonData = data.json();
          resolve(jsonData.data);
        },
        (error) => {
          reject(error); // Rejeita a Promise com o erro, se houver
        }
      );
    });
  }

  getMangaById(id: Number) {
    return this.http
      .get("http://localhost:3000/manga/getMangaById/"+id, )
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        return jsonData.mangas;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }

  reservaManga(id: Number) {
    return this.http
      .delete("http://localhost:3000/manga/deleteMangaById/"+id, )
      .map((responseRecebida: Response) => {
        const jsonData = responseRecebida.json();
        alert(jsonData.message)
        return jsonData.message;
      })
      .catch((errorRecebido: Response) =>
        Observable.throw(errorRecebido.json())
      );
  }
}
