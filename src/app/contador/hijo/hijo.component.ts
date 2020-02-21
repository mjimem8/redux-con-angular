import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador')
      .subscribe(state => this.contador = state);
  }

  multiplicar() {
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
  }

  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
  }

  resetNieto(nuevoContador) {
    this.contador = nuevoContador;
  }

}
