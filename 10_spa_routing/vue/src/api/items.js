const itemsMaster = [
  {
    id: '1',
    name: 'これからはじめるVue.js 3実践入門',
    description:
      'いま学んでおきたいJavaScriptフレームワーク「Vue.js」のエッセンスを一冊に詰め込みました!豊富なサンプルコードで試しながら理解できます!',
  },
  {
    id: '2',
    name: 'Vue.js入門 基礎から実践アプリケーション開発まで',
    description:
      'Vue.jsを初歩から実践まで徹底的に解説。 使いやすくかつ、プロダクションでも活躍するVue.jsをVue.jsコントリビューターの著者らが解説する一番わかりやすい入門書です。',
  },
  {
    id: '3',
    name: 'モダンJavaScriptの基本から始める React実践の教科書',
    description: 'Reactをイチから学びたい方にオススメの1冊です!',
  },
  {
    id: '4',
    name: '基礎から学ぶ React/React Hooks',
    description:
      'Reactの学習を進める上でつまずく原因はJavaScriptへの理解不足であることがほとんどではないかと考え、本書の冒頭ではJavaScriptの基礎について多めにページを割いています。',
  },
];

export const savedItems = [];

export function getAllItems() {
  return new Promise((resolve) => {
    savedItems.splice(0, savedItems.length);

    itemsMaster.forEach((item) => savedItems.push(item));

    resolve(savedItems);
  });
}

export function getItemById(id) {
  return new Promise((resolve, reject) => {
    const item = itemsMaster.find((i) => i.id === id);

    item ? resolve(item) : reject(new Error('not found'));
  });
}
