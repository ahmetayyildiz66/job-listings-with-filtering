import { reactive } from "vue"

export const state = reactive<{ filters: string[] }>({
  filters: []
})