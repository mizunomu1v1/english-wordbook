import { defineStore } from 'pinia'

export const useTagStore = defineStore('tagStore', {
  // データそのもの
  state: () => ({
    selectedTag: undefined as string | undefined,
  }),

  getters: {},
  // stateで定義した値を操作したり、取得する関数
  actions: {
    setTag(newSelectedTag: string | undefined) {
      this.selectedTag = newSelectedTag
    },
  },
})
