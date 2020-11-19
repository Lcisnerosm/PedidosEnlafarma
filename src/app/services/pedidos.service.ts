import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return new Promise(async (resolve) => {
      const headers = new HttpHeaders({
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1MWE0OTAwOC1hZjA0LTRlZmItOTY2Zi1hY2JjMjZhZDU0MWUiLCJyb2wiOiJhZG1pbiIsImlkdmVuZG9yIjoxLCJpYXQiOjE2MDU3NDg0OTIsImV4cCI6MTYwNTc4MDg5Mn0.oG7r-YBcNrh8ckTPcEYi4vvLisBeW8ZbC-dbSRE2aRI`,
      });
      this.http
        .get(`https://backendenlafarma.herokuapp.com/api/recep`, { headers })
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
}
