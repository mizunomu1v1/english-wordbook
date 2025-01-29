import { defineStore } from 'pinia'

export const useTagStore = defineStore('tagStore', {
  // データそのもの
  state: () => ({
    selectedTag: undefined as string | undefined,
  }),

  getters: {
    //  filteredWords: (state) => {
    //   return state.selectedTag
    //   ? words.filter((word) => word.tag === selectedTag.value)
    //   : words
    //  }
  },
  // stateで定義した値を操作したり、取得する関数
  actions: {
    setSelectedTag(newSelectedTag: string | undefined) {
      this.selectedTag = newSelectedTag
    },
  },
})
