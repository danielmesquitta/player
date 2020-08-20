export default function (time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time - minutes * 60);
  var formattedNumber = `${minutes}:${('0' + seconds).slice(-2)}`;
  return formattedNumber;
}
