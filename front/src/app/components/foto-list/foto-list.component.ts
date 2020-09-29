import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FotoService } from '../../services/foto.service';

import { Foto } from '../../interfaces/Foto';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos: Foto[] = [];

  constructor(private photoService: FotoService, private router: Router) { }

  ngOnInit() {
    this.photoService.getFotos()
      .subscribe(
        res => {
          this.fotos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string){
    this.router.navigate(['/foto', id]);
    
  }

}
