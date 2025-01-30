<script setup lang="ts">
import { ref } from 'vue'
import { useTagStore } from '@/stores/tagStore'

// テストデータ
const folders = [
  { name: 'テスト１' },
  { name: 'テスト２' },
  { name: 'Material Design' },
  { name: 'CSS' },
]

// タグストア
const tagStore = useTagStore()

// 画面上の選択タグ
const selectedTag = ref<number | undefined>(undefined)
/**
 * タグクリック時の処理
 */
const clickTag = (index: number, tag: string) => {
  if (selectedTag.value === index) {
    // すでに選択されているタグをクリックされた場合、解除する
    tagStore.setTag(undefined)
    selectedTag.value = undefined
  } else {
    // 別のタグをクリックされた場合、セットする
    tagStore.setTag(tag)
    selectedTag.value = index
  }
}
</script>

<template>
  <div class="main-container">
    <aside class="sidebar">
      <h2 class="content-title">タグ</h2>
      <ul class="folder-list">
        <li
          v-for="(folder, index) in folders"
          :key="index"
          @click="clickTag(index, folder.name)"
          :class="{ active: selectedTag === index }"
        >
          #{{ folder.name }}
        </li>
      </ul>
      <div>
        <!-- 歯車アイコン -->
        <CogIcon class="gear-icon" />
      </div>
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
  background-image: linear-gradient(50deg, rgba(251, 253, 191, 1), rgba(226, 207, 255, 1));
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
  display: flex;
  flex-wrap: wrap;
  cursor: pointer; /* ポインターモードに */
}

.content-title {
  font-weight: normal;
}

/**---------------------------------------------------------*/
/* フォルダリストのデザイン */
/**---------------------------------------------------------*/
.folder-list li {
  display: inline-block;
  margin: 0 0.1em 0.5em 0;
  padding: 0.4em;
  line-height: 1;
  text-decoration: none;
  background-color: #fff;
  mix-blend-mode: multiply;
}

/**---------------------------------------------------------*/
/* フォルダ選択時 */
/**---------------------------------------------------------*/
.folder-list li.active {
  background: #000324db; /* アクティブ時の背景色 */
  color: white; /* テキスト色 */
  mix-blend-mode: multiply;
  border-radius: 0.5em;
  cursor: pointer; /* ポインターモードに */
}

/**---------------------------------------------------------*/
/* フォルダ設定ボタン */
/**---------------------------------------------------------*/
.gear-icon > svg {
  width: 30px; /* アイコンの幅 */
  height: 30px; /* アイコンの高さ */
  color: #9e9e9eec; /* アイコンの色 */
  cursor: pointer; /* ポインターモードに */
  transition: transform 0.3s ease; /* アニメーション */
  /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.2)); */
}

.gear-icon:hover > svg {
  transform: rotate(45deg); /* ホバー時に回転 */
}
</style>
