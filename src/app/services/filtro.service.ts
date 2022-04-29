import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {
  private filtroSource = new BehaviorSubject(null);
  currentFiltro = this.filtroSource.asObservable();

  constructor() { }

  changeFiltro(filtro) {
    this.filtroSource.next(filtro)
  }

}
