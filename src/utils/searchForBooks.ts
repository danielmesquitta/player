import { IAudioData } from '~/@types/global';

export default function (searchText: string, audioDataList: IAudioData[]) {
  const searchRegExp = new RegExp(searchText, 'i');
  const filteredAudioData = audioDataList.filter(audioData =>
    audioData.title.match(searchRegExp)
  );
  return filteredAudioData;
}
