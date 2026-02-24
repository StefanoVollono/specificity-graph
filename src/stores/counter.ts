import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      count: 0,
    }
  },
})
