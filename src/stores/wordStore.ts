import type { Word } from '@/types/appType'
import { defineStore } from 'pinia'
import { useTagStore } from './tagStore'

export const useWordStore = defineStore('wordStore', {
  // データそのもの
  state: () => ({
    words: [
      {
        entry: 'Principles',
        meaning: '原則',
        tags: ['Material Design'],
        memo: '例）Material Design Principles\n訳）マテリアルデザインの原則',
      },
      {
        entry: 'Physical',
        meaning: '物理的な',
        tags: ['Material Design'],
        memo: '例）Physical world is tangible\n訳）物理的な世界について',
      },
      {
        entry: 'display: flex;',
        meaning: '横並びに配置する',
        tags: ['CSS'],
        memo: 'これがないと結構レイアウト崩れる、大切',
      },
      {
        entry: 'color:',
        meaning: 'テキスト色',
        tags: ['CSS'],
        memo: 'colorだけだから逆に覚えづらい',
      },
      {
        entry: 'sample',
        meaning: 'サンプル',
        tags: ['Material Design', 'CSS'],
        memo: 'にゃんころもち！',
      },
    ] as Word[],
  }),

  getters: {
    filteredWords: (state) => {
      const tagStore = useTagStore()
      return tagStore.selectedTag
        ? state.words.filter(
            (word) => tagStore.selectedTag && word.tags.includes(tagStore.selectedTag),
          )
        : state.words
    },
  },
  // stateで定義した値を操作したり、取得する関数
  actions: {},
})
