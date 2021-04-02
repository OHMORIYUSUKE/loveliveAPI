# ラブライブ API

## 説明

ラブライブ(μ’s,Aqours,虹ヶ咲)のメンバーのデータを返す REST 形式の API サーバーです。

### データの詳細

- μ’s 9 人
- Aqours 9 人
- 虹ヶ咲 10 人

## サーバー

PHP バージョン 7.1

## API の仕様

### 認証

認証を行いません。

### エンドポイント

http://utan.php.xdomain.jp/lovelivedatabase/api.php

### GET

サーバーが持っているデータを返します。

### レスポンス例

グループ別に返します。

http://utan.php.xdomain.jp/lovelivedatabase/api.php?groups=myu-z

?groups=myu-z には他に、aqours,nizi,all が用意されています。all はすべてのメンバー情報を返します。

```json
[
  {
    "id": "1",
    "groups": "myu-z",
    "name": "高坂 穂乃果",
    "grade": "2",
    "birthday": "8月3日",
    "bloodType": "O",
    "height": "157",
    "B": "78",
    "W": "58",
    "H": "82",
    "CV": "新田　恵海",
    "description": "μ’sの発起人であり牽引者。多少の困難があっても持ち前の超ポジティブシンキングで次々と突破していくμ’sのリーダー。",
    "image": "https://..."
  },

  {
    "id": "9",
    "groups": "myu-z",
    "name": "矢澤 にこ",
    "grade": "3",
    "birthday": "7月22日",
    "bloodType": "A",
    "height": "154",
    "B": "74",
    "W": "57",
    "H": "79",
    "CV": "徳井 青空",
    "description": "音ノ木坂学院アイドル研究部の創設者で部長。スクールアイドルとしてのこだわりはメンバー１で、μ’sの活動をとても大切に思っている。一人称は「にこにー」。",
    "image": "https://..."
  }
]
```

学年別で返します。

http://utan.php.xdomain.jp/lovelivedatabase/api.php?grade=2

?grade=2 には他に、1,3 が用意されています。

```json
[
  {
    "id": "1",
    "groups": "myu-z",
    "name": "高坂 穂乃果",
    "grade": "2",
    "birthday": "8月3日",
    "bloodType": "O",
    "height": "157",
    "B": "78",
    "W": "58",
    "H": "82",
    "CV": "新田　恵海",
    "description": "μ’sの発起人であり牽引者。多少の困難があっても持ち前の超ポジティブシンキングで次々と突破していくμ’sのリーダー。",
    "image": "https://..."
  },

  {
    "id": "25",
    "groups": "nizi",
    "name": "優木 せつ菜",
    "grade": "2",
    "birthday": "8月8日",
    "bloodType": "O",
    "height": "154",
    "B": "83",
    "W": "56",
    "H": "81",
    "CV": "楠木 ともり",
    "description": "他校からも注目を集める期待のスクールアイドル。アイドル活動で忙しいためか、「校内でその姿を見た人はいない」という都市伝説のような噂もある。実はアニメや漫画が大好き。",
    "image": "https://..."
  }
]
```

メンバー１人ごとのデータを返します。

http://utan.php.xdomain.jp/lovelivedatabase/api.php?id=2

?id=2 には他に、1~28 が用意されています。

```json
[
  {
    "id": "20",
    "groups": "nizi",
    "name": "中須かすみ",
    "grade": "1",
    "birthday": "1月23日",
    "bloodType": "B",
    "height": "155",
    "B": "76",
    "W": "55",
    "H": "79",
    "CV": "相良茉優",
    "description": "かわいいもの好きで、スクールアイドルに対する憧れは人一倍強い。いたずらっ子な性格で、よくいたずらをするが、メンバーたちには全然効いていない様子。",
    "image": "https://..."
  }
]
```

## API 試したい

api.html をダウンロードして、

```js
url: "http://utan.php.xdomain.jp/lovelivedatabase/api.php?id=1",//grade groups id
```

をいろいろ変更して試してみてください。
