import produce from 'immer';
import { IPlayerState } from '~/@types/store';

const INITIAL_STATE = false;

interface IAction {
  type: string;
  payload: IPlayerState;
}

const cart = produce((draft: IPlayerState, action: IAction) => {
  switch (action.type) {
    case '@player/UPDATE_STATE': {
      return (draft = action.payload);
    }
  }
}, INITIAL_STATE);

export default cart;
