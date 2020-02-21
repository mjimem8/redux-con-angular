//antes -> import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, actions, DIVIDIR, RESET } from './contador.actions';
import * as fromContador from './contador.actions';

export function contadorReducer(state: number = 10, actions: fromContador.actions) {
    
    switch (actions.type) {

        case fromContador.INCREMENTAR:
            return state + 1;

        case fromContador.DECREMENTAR:
            return state - 1;

        case fromContador.MULTIPLICAR:
            return state * actions.payload;

        case fromContador.DIVIDIR:
            return state / actions.payload;

        case fromContador.RESET:
            return 0;

        default:
            return state;
    }

}