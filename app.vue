<template>
  <div class="bg-black fixed w-screen h-full">
    <NuxtPage />

    <CreatePost
      :class="[
        {
          'max-h-[100vh] transition-all duration-300 ease-in visible':
            isMenuOverlay,
        },
        {
          'max-h-0 transition-all duration-300 ease-out invisible':
            !isMenuOverlay,
        },
      ]"
    />
    <Modal
      :class="[
        {
          'max-h-[100vh] transition-all duration-300 ease-in visible':
            isLogoutOverlay,
        },
        {
          'max-h-0 transition-all duration-300 ease-out invisible':
            !isLogoutOverlay,
        },
      ]"
    />
  </div>
</template>
<script setup lang="ts">
import CreatePost from './components/CreatePost.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const { isMenuOverlay, isLogoutOverlay } = storeToRefs(userStore)
</script>
