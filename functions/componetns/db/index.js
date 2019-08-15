const members = [
    { id: 1, name: "あらた", star: "魚座", eniaguramu: 5 },
    { id: 2, name: "りょうちゃん", star: "蟹座", eniaguramu: 1 },
    { id: 3, name: "ひろき", star: "蠍座", eniaguramu: 5 },
    { id: 4, name: "かつや", star: "獅子座", eniaguramu: 5 },
    { id: 5, name: "キッチン", star: "牡羊座", eniaguramu: 2 },
    { id: 6, name: "とむ", star: "水瓶座", eniaguramu: 3 },
    { id: 7, name: "電電", star: "蠍座", eniaguramu: 8 },
    { id: 8, name: "くぎ", star: "蠍座", eniaguramu: 6 },
    { id: 9, name: "リク", star: "牡羊座", eniaguramu: 4 },
    { id: 10, name: "NASA", star: "蠍座", eniaguramu: 7 },
    { id: 11, name: "てるふの", star: "水瓶座", eniaguramu: 8 },
    { id: 12, name: "しんや", star: "射手座", eniaguramu: 6 },
    { id: 13, name: "りょう(R.S)", star: "双子座", eniaguramu: 5 },
    { id: 14, name: "ぎーたか", star: "獅子座", eniaguramu: 1 },
    { id: 15, name: "たじまん", star: "乙女座", eniaguramu: 7 },
    { id: 16, name: "ツム", star: "乙女座", eniaguramu: 7 },
    { id: 17, name: "直紀", star: "射手座", eniaguramu: 8 },
    { id: 18, name: "たか", star: "山羊座", eniaguramu: 6 },
    { id: 19, name: "ウォーリー", star: "射手座", eniaguramu: 6 },
    { id: 20, name: "ダンテ", star: "乙女座", eniaguramu: 5 },
    { id: 21, name: "アサシン", star: "牡羊座", eniaguramu: 7 },
    { id: 22, name: "ゆうちゃん", star: "蠍座", eniaguramu: 3 },
    { id: 23, name: "ふじ", star: "獅子座", eniaguramu: 6 },
    { id: 24, name: "よしじ", star: "蠍座", eniaguramu: 4 },
    { id: 25, name: "まえちゃん", star: "魚座", eniaguramu: 8 },
    { id: 26, name: "まっきー", star: "射手座", eniaguramu: 7 },
    { id: 27, name: "おじさん", star: "牡牛座", eniaguramu: 7 },
    { id: 28, name: "りゅう", star: "蠍座", eniaguramu: 3 },
    { id: 29, name: "タツヤ", star: "天秤座", eniaguramu: 3 },
    { id: 30, name: "てっちゃん", star: "水瓶座", eniaguramu: 9 }
];

const startMember = [
    { id: 3, name: "ひろき", star: "蠍座", eniaguramu: 5 },
    { id: 7, name: "電電", star: "蠍座", eniaguramu: 8 },
    { id: 8, name: "くぎ", star: "蠍座", eniaguramu: 6 },
    { id: 10, name: "NASA", star: "蠍座", eniaguramu: 7 },
    { id: 22, name: "ゆうちゃん", star: "蠍座", eniaguramu: 3 },
    { id: 24, name: "よしじ", star: "蠍座", eniaguramu: 4 },
    { id: 28, name: "りゅう", star: "蠍座", eniaguramu: 3 },
    { id: 2, name: "りょうちゃん", star: "蟹座", eniaguramu: 1 },
    { id: 13, name: "りょう(R.S)", star: "双子座", eniaguramu: 5 },
    { id: 15, name: "たじまん", star: "乙女座", eniaguramu: 7 },
    { id: 16, name: "ツム", star: "乙女座", eniaguramu: 7 },
    { id: 20, name: "ダンテ", star: "乙女座", eniaguramu: 5 },
    { id: 27, name: "おじさん", star: "牡牛座", eniaguramu: 7 },
    { id: 18, name: "たか", star: "山羊座", eniaguramu: 6 },
    { id: 4, name: "かつや", star: "獅子座", eniaguramu: 5 },
    { id: 14, name: "ぎーたか", star: "獅子座", eniaguramu: 1 },
    { id: 23, name: "ふじ", star: "獅子座", eniaguramu: 6 },
    { id: 1, name: "あらた", star: "魚座", eniaguramu: 5 },
    { id: 25, name: "まえちゃん", star: "魚座", eniaguramu: 8 },
    { id: 29, name: "タツヤ", star: "天秤座", eniaguramu: 3 },
    { id: 6, name: "とむ", star: "水瓶座", eniaguramu: 3 },
    { id: 11, name: "てるふの", star: "水瓶座", eniaguramu: 8 },
    { id: 30, name: "てっちゃん", star: "水瓶座", eniaguramu: 9 },
    { id: 12, name: "しんや", star: "射手座", eniaguramu: 6 },
    { id: 17, name: "直紀", star: "射手座", eniaguramu: 8 },
    { id: 19, name: "ウォーリー", star: "射手座", eniaguramu: 6 },
    { id: 26, name: "まっきー", star: "射手座", eniaguramu: 7 },
    { id: 5, name: "キッチン", star: "牡羊座", eniaguramu: 2 },
    { id: 9, name: "リク", star: "牡羊座", eniaguramu: 4 },
    { id: 21, name: "アサシン", star: "牡羊座", eniaguramu: 7 },
];

const star = [
    {
        "content": "普段、あまり手に取らないような本が、今のあなたを変えてくれそう。本屋や図書館では、ステキな出会いのチャンスも！？",
        "item": "白いワンピース",
        "money": 5,
        "total": 5,
        "job": 5,
        "color": "レッド",
        "day": "",
        "love": 5,
        "rank": 1,
        "sign": "蠍座"
    },
    {
        "content": "旅行の計画を立てると、日々のマンネリ解消に。これまで足を踏み入れたことのない街がオススメ。親友を誘ってみましょう♪",
        "item": "エコバッグ",
        "money": 4,
        "total": 5,
        "job": 5,
        "color": "オレンジ",
        "day": "",
        "love": 5,
        "rank": 2,
        "sign": "蟹座"
    },
    {
        "content": "目標に向かって大きく前進できるチャンス。年上の人からのアドバイスをよく聞くと吉。自分のこだわりを忘れてみるのも大事☆",
        "item": "バター",
        "money": 4,
        "total": 4,
        "job": 5,
        "color": "ホワイト",
        "day": "",
        "love": 5,
        "rank": 3,
        "sign": "双子座"
    },
    {
        "content": "地域の行事には、ぜひ参加をしてみましょう。歴史や文化を学ぶ時間は、あなたの魅力を高めてくれます♪人の話もよく聞いて。",
        "item": "ほうじ茶",
        "money": 4,
        "total": 4,
        "job": 4,
        "color": "ブラック",
        "day": "",
        "love": 5,
        "rank": 4,
        "sign": "乙女座"
    },
    {
        "content": "取り組みたいものがあるなら、この日から準備をスタートさせて。ダイエットや貯金を始めるのも、良いタイミングです。",
        "item": "カツサンド",
        "money": 3,
        "total": 4,
        "job": 4,
        "color": "グリーン",
        "day": "",
        "love": 4,
        "rank": 5,
        "sign": "牡牛座"
    },
    {
        "content": "迷いが吹っ切れる一日。不安はなくなり、ひたすら前進できるタイミングです。ただし、自分を過信しないようにして。",
        "item": "絵葉書",
        "money": 3,
        "total": 3,
        "job": 4,
        "color": "ピンク",
        "day": "",
        "love": 4,
        "rank": 6,
        "sign": "山羊座"
    },
    {
        "content": "運気はまずまず。引越しや転職を考えているなら、妥協をしないようにして。先輩の助言は、良い道しるべになってくれます。",
        "item": "豚の生姜焼き",
        "money": 3,
        "total": 3,
        "job": 3,
        "color": "シルバー",
        "day": "",
        "love": 4,
        "rank": 7,
        "sign": "獅子座"
    },
    {
        "content": "集中力が高まっているので、テキパキと作業を終えられます。手が空いたら、忙しそうな仲間を手伝ってあげるのも◎。",
        "item": "コロッケ",
        "money": 3,
        "total": 3,
        "job": 3,
        "color": "ゴールド",
        "day": "",
        "love": 3,
        "rank": 8,
        "sign": "魚座"
    },
    {
        "content": "後輩へのおごりで出て行くお金は、必要経費と思うこと。夜は出会いを求めて、人がたくさんいる所へ遊びに行きましょう。",
        "item": "ファンデーション",
        "money": 2,
        "total": 3,
        "job": 3,
        "color": "パープル",
        "day": "",
        "love": 3,
        "rank": 9,
        "sign": "天秤座"
    },
    {
        "content": "理想に近い人と親しくなれるかも。ルックスよりも、性格面を重視しましょう。連絡先の交換は、あなたからお願いして。",
        "item": "封筒",
        "money": 2,
        "total": 2,
        "job": 2,
        "color": "ブルー",
        "day": "",
        "love": 3,
        "rank": 10,
        "sign": "水瓶座"
    },
    {
        "content": "感情的になりやすいので、人と接する際の態度に注意しましょう。穏やかな振る舞いを心がけると、異性からの高評価も。",
        "item": "ロールケーキ",
        "money": 2,
        "total": 2,
        "job": 2,
        "color": "イエロー",
        "day": "",
        "love": 2,
        "rank": 11,
        "sign": "射手座"
    },
    {
        "content": "夏バテでやる気がダウン。こんな日は部屋でゆっくりしながら休息を。長期戦になりそうだった恋愛は、変化の兆しも。",
        "item": "レモンティー",
        "money": 1,
        "total": 1,
        "job": 2,
        "color": "グレー",
        "day": 15,
        "love": 2,
        "rank": 12,
        "sign": "牡羊座"
    }
];

module.exports = {
    getMembers: function () {
        return members;
    },
    getStarMember: function () {
        return startMember;
    },
    getStar: function () {
        return star;
    }
};