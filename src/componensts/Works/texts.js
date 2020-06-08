import serendipity from './images/srendipity.jpg';
import tansan from './images/tansan_splash.jpg';
import digital_spray from './images/digital_spray.jpg';
import movie from './images/digital_splay_movie.mp4';


const texts = [
  {
    title : 'Serendipity',
    cardText : 'フーリエ変換で声を光の柱に変える作品',
    modalText : `初めて作ったインタラクティブアート作品.
                声や音の高さで光る柱が,大きさで光の高さが変わる.
                マイクからの入力を高速フーリエ変換で周波数領域に変換することで実現.
                マイク入力と高速フーリエ変換にProcessing,LED制御にArduinoを使用.`,
    image : serendipity
  },
  {
    title : 'TansanSplash',
    cardText : '振ると水しぶきが上がるペットボトル',
    modalText : `ペットボトル型のデバイスを振って机に置くと,水しぶきが噴き出す.
                デバイスの中の加速度センサが振った回数を記録し,振った回数に応じて水しぶきの数や勢いを変化させて壁に映像を投影する.
                マイコンはESP32,映像の描画にはProcessingを使用.`,
    image : tansan
  },
  {
    title : 'DigitalSpray',
    cardText : '自由に色を変えられるデジタルなスプレー',
    modalText : `スプレー型のデバイスのボタンを壁に向かって押すとスプレーのように壁に色を塗ることができる.
                デバイスの赤外線LEDの光をカメラで認識することで位置を特定している.
                デバイスには４つのスライダーが付いており,RGBと描画半径を変えられる.
                デバイスの中にマイコンが入っておりbluetoothでPCにデータを送信している.描画はProcessingが行っている.`,
    image : digital_spray
  }
];

export default texts;