import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoService } from '../../services/foto.service';

import { Foto } from '../../interfaces/Foto';

@Component({
  selector: 'app-foto-preview',
  templateUrl: './foto-preview.component.html',
  styleUrls: ['./foto-preview.component.css']
})
export class FotoPreviewComponent implements OnInit {

  id: string;
  foto: Foto;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fotoService: FotoService,) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      this.fotoService.getFoto(this.id)
        .subscribe(res => {
          this.foto = res;
        }, err => console.log(err)
        )
    });
  }

  borrarFoto(id: string) {
    this.fotoService.deleteFoto(id)
      .subscribe(res => {
        console.log(res); this.router.navigate(['/foto'])
      }, err => console.log(err))

  }

  actualizarFoto(title: HTMLInputElement, descripcion: HTMLTextAreaElement): boolean {
    this.fotoService.updateFoto(this.id, title.value, descripcion.value)
    .subscribe(
      res => {this.router.navigate(['/foto'])
      }, err => console.log(err))
    return false
  }

}
// this.photoService.getFoto(id)
//     .subscribe(
//       res => console.log(res), err => console.log(err)
//     )