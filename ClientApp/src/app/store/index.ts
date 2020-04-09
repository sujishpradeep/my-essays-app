// src/app/store/index.ts

import { Subject } from "rxjs";
import { ActionTypes } from "./actions";

interface InitialState {
  paras: Array<Object>;
}

interface Para {
  reference: string;
  weightage: string;
}

export let state: InitialState = {
  paras: [],
};

interface Event {
  type: String;
  payload?: Object;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
  switch (data.type) {
    case ActionTypes.GET_PARAS:
      store.next(state);
      break;

    case ActionTypes.CREATE_PARA:
      state = {
        paras: [...state.paras, data.payload],
      };
      store.next(state);
      break;

    case ActionTypes.DELETE_PARA:
      const { paras } = state;
      const reference = data.payload;
      const updatedNotes = paras.filter(
        (para: Para) => para.reference !== reference
      );
      state = {
        paras: updatedNotes,
      };
      store.next(state);
      break;
    default:
      break;
  }
});
