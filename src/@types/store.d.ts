export type IPlayerState = 'playing' | 'paused' | 'destroyed';

export interface IStore {
  player: IPlayerState;
}
