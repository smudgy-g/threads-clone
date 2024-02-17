import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /* STATE */
  const posts = ref([])
  const isMenuOverlay = ref(false)
  const isLogoutOverlay = ref(false)

  /* ACTIONS */
  function toggleMenuOverlay() {
    isMenuOverlay.value = !isMenuOverlay.value
  }

  function toggleLogoutOverlay() {
    isLogoutOverlay.value = !isLogoutOverlay.value
  }

  return {
    posts,
    isMenuOverlay,
    isLogoutOverlay,
    toggleMenuOverlay,
    toggleLogoutOverlay,
  }
})
