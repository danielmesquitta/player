import { IPlayerState } from '~/@types/store';

export default {
  updatePlayerState(playerState: IPlayerState) {
    return { type: '@player/UPDATE_STATE', payload: playerState };
  },
};
