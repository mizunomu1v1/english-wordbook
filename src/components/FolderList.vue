<script setup lang="ts">
import { ref } from 'vue'

// テストデータ
const folders = [{ name: '全ての単語' }, { name: '#Material Design' }, { name: '#CSSタグ' }]

const selectedFolder = ref(0)
const selectFolder = (index: number) => {
  if (selectedFolder.value !== undefined) {
    selectedFolder.value = index
  }
}
</script>

<template>
  <div class="main-container">
    <aside class="sidebar">
      <h2>タグ</h2>
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
      <!-- <button class="add-folder" @click="addFolder">＋ フォルダ追加</button> -->
      <button class="add-folder">追加</button>
    </aside>
  </div>
</template>

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
/*  左カラム全体 */
/**---------------------------------------------------------*/
.sidebar {
  width: 260px; /* 横幅を固定 */
  background: #ffe4e1; /* 背景色: サーモンピンク */
  padding: 20px; /* 内側の余白 */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* 影を付ける */
  position: absolute; /* 画面左上に固定するための配置 */
  top: 0; /* 上端を基準に */
  left: 0; /* 左端を基準に */
  height: 100vh; /* 高さを画面全体に固定 */
}
/**---------------------------------------------------------*/
/*  左カラムタイトル */
/**---------------------------------------------------------*/
.sidebar h2 {
  margin-bottom: 20px; /* h2下の余白 */
}

/**---------------------------------------------------------*/
/* フォルダリストの表示 */
/**---------------------------------------------------------*/
.folder-list {
  list-style: none; /* リストのデフォルトの点を削除 */
  padding: 0; /* 内側の余白をリセット */
}

/**---------------------------------------------------------*/
/* フォルダリストのデザイン */
/**---------------------------------------------------------*/
.folder-list li {
  padding: 10px; /* 内側の余白 */
  margin-bottom: 5px; /* 下の余白 */
  background: white; /* 背景色: 白 */
  border-radius: 4px; /* 角を丸くする */
  cursor: pointer; /* マウスカーソルをポインターに */
  text-align: center; /* テキストを中央揃え */
}

/**---------------------------------------------------------*/
/* フォルダ選択時 */
/**---------------------------------------------------------*/
.folder-list li.active {
  background: #ff6f61; /* アクティブ時の背景色 */
  color: white; /* テキスト色 */
}

/**---------------------------------------------------------*/
/* フォルダ追加ボタン */
/**---------------------------------------------------------*/
.add-folder {
  margin-top: 20px; /* 上の余白 */
  padding: 10px; /* 内側の余白 */
  background: white; /* 背景色: 白 */
  border: none; /* ボーダーを削除 */
  border-radius: 4px; /* 角を丸くする */
  cursor: pointer; /* ポインターに変更 */
}
</style>
