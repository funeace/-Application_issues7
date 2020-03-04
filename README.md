# 下記のURLが課題7の課題となります。
課題7<br>
Bookers2に住所検索機能を追加しましょう<br>
jpostal.jpとgem jp_prefectureを使用して住所を検索しましょう<br>
実装する機能<br>

モデル<br>
userモデルに郵便番号, 住所を格納するカラムを追加 ok<br>
ビュー<br>
新規登録画面に郵便番号を入力するフォームを追加 ok<br>
郵便番号を入力後、郵便番号に対応する住所を住所フォームに自動入力させる ok<br>
マイページに自分の住所の地図を表示 他人の詳細画面では住所を表示しないこと<br>
Google Map APIを使用すること ok<br>
APIトークンはgem dotenv-railsを使用し、環境変数として扱うこと ok


参考：
  地図表示
  https://www.webdesignleaves.com/pr/plugins/googlemap_01.html
  https://qiita.com/tiara/items/4a1c98418917a0e74cbb

  dotenv-rails関係
  https://qiita.com/ryosuketter/items/ceb592dc6b23a20e51b5
  https://qiita.com/noraworld/items/bfa80811c9e30b4474af

  住所検索
  https://ruby-rails.hatenadiary.com/entry/20150112/1421029284
  https://qiita.com/keye/items/d732353364c9fa0de9bf
  https://remonote.jp/rails-jp_prefecture-jppostal
  https://teratail.com/questions/178269