import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../services/foto.service';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-foto-form',
  templateUrl: './foto-form.component.html',
  styleUrls: ['./foto-form.component.css']
})
export class FotoFormComponent implements OnInit {

  file: File;
  fotoSelected: String | ArrayBuffer;

  constructor(private fotoService: FotoService, private router: Router) { }

  ngOnInit(): void {
  }

  onFotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //img preview
      const reader = new FileReader();
      reader.onload = e => this.fotoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }

  }

  uploadFoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.fotoService.createFoto(title.value, description.value, this.file)
      .subscribe(res => {
        this.router.navigate(['/foto'])
      },
        err => console.log(err))
    return false;
  }

}
