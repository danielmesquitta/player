import { IPlayerState } from '~/@types/store';

export function updatePlayerState(playerState: IPlayerState) {
  return { type: '@player/UPDATE_STATE', payload: playerState };
}
