import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../interfaces/Foto'


@Injectable({
  providedIn: 'root'
})
export class FotoService {

  URI = 'http://localhost:3000/api/photos';

  constructor(private http: HttpClient) { }

  createFoto(title: string, descripcion: string, photo: File ) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('descripcion', descripcion);
    fd.append('image', photo);
    return this.http.post<Foto[]>(this.URI, fd);
    
  }

  getFotos() {
    return this.http.get<Foto[]>(this.URI);
  }

  getFoto(id: string) {
    return this.http.get<Foto>(`${this.URI}/${id}`);
  }

  deleteFoto(id: string){
    return this.http.delete<Foto>(`${this.URI}/${id}`);
  }

  updateFoto(id: string, title: string, descripcion: string){
    return this.http.put<Foto>(`${this.URI}/${id}`, {title, descripcion});
  }
}
