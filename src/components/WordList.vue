<template>
  <div class="main-container">
    <!-- 左カラム: ライブラリ風 -->
    <aside class="sidebar">
      <h2>フォルダ</h2>
      <ul class="folder-list">
        <li
          v-for="(folder, index) in folders"
          :key="index"
          @click="selectFolder(index)"
          :class="{ active: selectedFolder === index }"
        >
          {{ folder.name }}
        </li>
      </ul>
      <button class="add-folder" @click="addFolder">＋ フォルダ追加</button>
    </aside>

    <!-- 右カラム: Issue風の単語一覧 -->
    <main class="content">
      <header class="content-header">
        <h1>単語一覧</h1>
        <div class="header-actions">
          <button @click="addWord">＋ 単語を登録</button>
          <input type="text" v-model="searchQuery" placeholder="🔍 検索" />
        </div>
      </header>

      <ul class="word-list">
        <li v-for="(word, index) in filteredWords" :key="index" class="word-item">
          <div class="word-details">
            <strong class="word-text">{{ word.text }}</strong>
            <p class="word-translation">翻訳: {{ word.translation }}</p>
          </div>
          <div class="word-actions">
            <button @click="editWord(index)">編集</button>
            <button @click="deleteWord(index)">覚えた</button>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      folders: [{ name: '全ての単語' }, { name: '未学習' }, { name: '覚えた単語' }],
      selectedFolder: 0,
      words: [
        { text: 'Principles', translation: '原則' },
        { text: 'Physical', translation: '物理的な' },
      ],
      searchQuery: '',
    }
  },
  computed: {
    filteredWords() {
      const query = this.searchQuery.trim().toLowerCase()
      return this.words.filter(
        (word) => word.text.toLowerCase().includes(query) || word.translation.includes(query),
      )
    },
  },
  methods: {
    selectFolder(index) {
      this.selectedFolder = index
    },
    addFolder() {
      const folderName = prompt('新しいフォルダ名を入力してください')
      if (folderName) {
        this.folders.push({ name: folderName })
      }
    },
    addWord() {
      const word = prompt('新しい単語を入力してください')
      const translation = prompt('その翻訳を入力してください')
      if (word && translation) {
        this.words.push({ text: word, translation })
      }
    },
    editWord(index) {
      console.log('Edit word at index:', index)
    },
    deleteWord(index) {
      console.log('Mark word as learned:', index)
    },
  },
}
</script>

<style>
/**---------------------------------------------------------*/
/* アプリ全体の配置設定 */
/**---------------------------------------------------------*/
.main-container {
  display: flex; /* 左右カラムを横並びに配置する */
  height: 100vh; /* 画面全体の高さを確保 */
  width: 95vw; /* 画面全体の幅を確保 */
}

/**---------------------------------------------------------*/
/* 右カラム全体 */
/**---------------------------------------------------------*/
.content {
  position: absolute; /* 絶対配置を利用 */
  top: 0; /* 画面の上端に固定 */
  left: 260px; /* 左カラムの幅分だけ右にずらす */
  width: calc(100% - 260px); /* 残りの幅を右カラムに割り当てる */
  padding: 20px; /* 内側の余白 */
  background: #f9f9f9; /* 背景色 */
  height: 100vh; /* 画面全体の高さ */
  overflow-y: auto; /* 縦スクロールを許可 */
}

/**---------------------------------------------------------*/
/* 右カラムヘッダ */
/**---------------------------------------------------------*/
.content-header {
  display: flex; /* 水平方向に並べる */
  justify-content: space-between; /* 左右に要素を配置 */
  align-items: center; /* 垂直方向の中央揃え */
  margin-bottom: 20px; /* 下の余白 */
}

/**---------------------------------------------------------*/
/* 単語一覧リスト */
/** いまのとこ効果なし。けすかも */
/**---------------------------------------------------------*/
.word-list {
  list-style: none; /* リストマーカーを削除 */
  padding: 0; /* 内側の余白をリセット */
}

/**---------------------------------------------------------*/
/* 単語カード */
/**---------------------------------------------------------*/
.word-item {
  display: flex; /* 単語カードの中身を水平方向に並べる */
  justify-content: space-between; /* div要素を左右に分ける */
  align-items: center; /* 垂直方向の中央揃え */
  padding: 15px; /* 内側の余白 */
  margin-bottom: 10px; /* 単語カード下の余白 */
  background: white; /* 背景色: 白 */
  border: 1px solid #ddd; /* 外枠 */
  border-radius: 4px; /* 角を丸くする */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 影 */
}
</style>
