<script setup lang="ts">
import { ref } from 'vue'
import { useWordStore } from '@/stores/wordStore'

const searchQuery = ''

// ストア
const wordStore = useWordStore()

// 単語の数だけ配列を作って、初期値をfalesにする
const isDetailsVisible = ref(new Array(wordStore.words.length).fill(false))

// 指定されたindexのみtrueにする
const toggleDetails = (index: number) => {
  isDetailsVisible.value[index] = !isDetailsVisible.value[index]
}
</script>

<template>
  <div class="main-container">
    <main class="content">
      <header class="content-header">
        <h1 class="content-title">🧸単語一覧</h1>
        <div class="header-actions">
          <!-- 検索窓 -->
          <input
            type="text"
            placeholder="🔍 単語を検索"
            v-model="searchQuery"
            class="search-input"
          />

          <!-- 単語追加ボタン -->
          <button class="add-word-btn">＋ 単語追加</button>
          <!-- <button class="add-word-btn" @click="addWord">＋ 単語追加</button> -->
        </div>
      </header>

      <!-- 単語一覧 -->
      <li v-for="(word, index) in wordStore.filteredWords" :key="index" class="word-item">
        <div class="word-header">
          <div class="words">
            <p class="word-h">{{ word.entry }}</p>
            <p>{{ word.meaning }}</p>
            <div class="tag">
              <p v-for="(tag, index) in word.tags" :key="index">#{{ tag }}</p>
            </div>
          </div>
          <div class="word-actions">
            <button @click="toggleDetails(index)" class="detail-btn">詳細</button>
            <button class="detail-btn">編集</button>
            <button class="detail-btn">削除</button>
          </div>
        </div>

        <!-- 詳細部分（スライド表示） -->
        <div
          v-if="isDetailsVisible[index]"
          class="word-details"
          :style="{ height: isDetailsVisible[index] ? 'auto' : '0px' }"
        >
          <p class="word-details-p">{{ word.memo }}</p>
        </div>
      </li>
    </main>
  </div>
</template>

<style scoped>
.bold {
  font-weight: bold;
}
.tag {
  color: #696969; /*文字色*/
  display: flex;
  gap: 5px;
}

.word-item {
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* スライド効果用 */
  transition: height 0.3s ease; /* スライドアニメーション */
}

.word-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-btn {
  padding: 5px 10px;
  background: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.detail-btn:hover {
  background: #bbb;
}

.words {
  display: flex;
  gap: 10px;
}

.word-details {
  padding: 10px; /* 内側の余白 */
  margin-top: 10px; /* 上の余白を10pxに設定 */
  border-top: 1px solid #ddd;
  background: #f9f9f9;
  overflow: hidden; /* スライドアニメーション時に余分な内容を隠す */
  white-space: pre-line; /* テキスト内の改行を反映 */
  color: #000324db; /* テキスト色 */
}

.word-h {
  display: inline;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgba(252, 81, 132, 0.356) 50%);
}

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
  background: #fff; /* 背景色 f9f9f9*/
  height: 100vh; /* 画面全体の高さ */
  overflow-y: auto; /* 縦スクロールを許可 */
}

/**---------------------------------------------------------*/
/* 右カラムヘッダ */
/**---------------------------------------------------------*/
.content-header {
  display: flex;
  justify-content: space-between; /* 左右に要素を配置 */
  align-items: center; /* 垂直方向の中央揃え */
  margin-bottom: 20px; /* 下の余白 */
}

.content-title {
  font-weight: normal;
}

.header-actions {
  display: flex; /* 横並びにする */
  /* flex-direction: column; 　にすると縦*/
  gap: 10px; /* 要素間の余白を20pxに広げる */
}

/* 検索窓 */
.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
}

/* 単語追加ボタン */
.add-word-btn {
  padding: 10px;
  background: #000324db;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

/**---------------------------------------------------------*/
/* 単語一覧リスト */
/** いまのとこ効果なし。けすかも */
/**---------------------------------------------------------*/
.word-list {
  list-style: none; /* リストマーカーを削除 */
  padding: 0; /* 内側の余白をリセット */
}
.word-details {
  display: flex; /* 左右カラムを横並びに配置する */
}

/**---------------------------------------------------------*/
/* 単語カード */
/**---------------------------------------------------------*/
.word-item {
  /* display: flex;  */
  /* 単語カードの中身を水平方向に並べる */

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
