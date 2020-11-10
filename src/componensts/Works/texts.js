import serendipity from './images/srendipity.jpg'
import tansan from './images/tansan_splash.jpg'
import tansan_gif from './images/tansan2.gif'
import digital_spray from './images/digital_spray.jpg'
import digital_spray_gif from './images/digital_splay2.gif'
import drunk_checker from './images/drunk_checker.png'
import portfolio from './images/portfolio.png'
import kakeibo from './images/mykakeibo.png'
import magic_circle from './images/magic_circle.png'
import magic_circle_video from './images/MagicCircle.mp4'


const texts = [
  {
    title : 'Serendipity',
    cardText : 'フーリエ変換で声を光の柱に変える',
    modalText : `初めて作ったインタラクティブアート作品です.
                声や音の高さで光る柱が,大きさで光の高さが変わります.
                マイクからの入力を高速フーリエ変換で周波数領域に変換します.
                マイク入力と高速フーリエ変換にProcessing,LED制御にArduinoを使用しました.`,
    image : serendipity,
    thumbnail : serendipity,
  },
  {
    title : 'TansanSplash',
    cardText : '振ると水しぶきが上がるペットボトル',
    modalText : `ペットボトル型のデバイスを振って机に置くと,水しぶきが勢いよく噴き出します.
                デバイスの中の加速度センサが振った回数を記録し,振った回数に応じて水しぶきの数や勢いを変化させて壁に映像を投影されます.
                マイコンはESP32,映像の描画にはProcessingを使用しました.`,
    image : tansan_gif,
    thumbnail : tansan,
  },
  {
    title : 'DigitalSpray',
    cardText : '自由に色を変えられるデジタルなスプレー',
    modalText : `スプレー型のデバイスのボタンを壁に向かって押すとスプレーのように壁に色を塗ることができます.
                デバイスの赤外線LEDの光をカメラで認識することで位置を特定しています.
                デバイスには４つのスライダーが付いており,RGBと描画半径を変えられます.
                デバイスの中にマイコンが入っておりbluetoothでPCにデータを送信しています.描画はProcessingが行っています.`,
    image : digital_spray_gif,
    thumbnail : digital_spray,
  },
  {
    title : '酔いチェッカー',
    cardText : '酔いの程度がわかるWebアプリ',
    modalText : `node.jsを使ったWebアプリです.
                使い方は、最初に自分の体重を入力します。そして飲んだお酒の種類と量を入力していきます。
                するといま自分がどれくらいアルコールを摂取し、どの程度酔っているかがわかります。
                セッションを活用し、使っている途中に別のサイトに行ったり、ブラウザを閉じても状態を保持するようにしました。`,
    image : drunk_checker,
    thumbnail : drunk_checker,
    linkName : 'link',
    link : 'https://drunk-checker.appspot.com/'
  },
  {
    title : "Hayato Terao's Portfolio",
    cardText : '自分のポートフォリオサイト',
    modalText : `私のポートフォリオサイト（このサイト）です。
                Reactで書かれており、Worksのカードをコンポーネント化することにより、後からでも作品を簡単に追加できるようにしました。`,
    image : portfolio,
    thumbnail : portfolio
  },
  {
    title : '自作家計簿アプリ',
    cardText : '自分専用の家計簿アプリ',
    modalText : `node.jsとPostgreSqlを使った自分専用の家計簿webアプリです。
                現在の所持金と所持金からカード支払額を引いた実質所持金額を表示しています。
                カード支払い日になると自動的に所持金から支払額が引かれます。
                またサブスクリプションについても同様で、支払日になると自動でカード支払額に加算されます。`,
    image : kakeibo,
    thumbnail : kakeibo
  },
  {
    title : 'Magic Circle',
    cardText : 'オリジナルの魔法を創る',
    modalText : `タブレットに魔法陣を描くと、魔法が発動されます。
                描いた魔法陣の模様により、魔法が変化し、自分だけの魔法を創ることができます。
                魔法陣を描くフロント部分はp5.js、魔法陣の画像処理部分にDjangoとopencvを使用し、魔法の描画にはUnityを使っています。`,
    thumbnail : magic_circle,
    video : magic_circle_video
  }
];

export default texts;