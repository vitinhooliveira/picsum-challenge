import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PicsumService {
  public getPhotos(e: number): Observable<any> {
    return this.http.get(`https://picsum.photos/v2/list?page=${e}&limit=35`);
  }

  constructor(private http: HttpClient) {}
}
