<template>
  <MainLayout>
    <div
      id="IndexPage"
      class="w-full overflow-auto"
    >
      <div class="mx-auto max-w-[500px] overflow-hidden">
        <div
          id="Posts"
          class="px-4 max-w-[600px] mx-auto"
        >
          <div
            class="text-white"
            v-if="isPosts"
            v-for="post in posts"
            :key="post"
          >
            <Post
              :post="post"
              @isDeleted="posts = []"
            />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import MainLayout from '~/layouts/MainLayout.vue'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const isPosts = ref(true)
const isLoading = ref(false)
const posts = ref<any[]>([])

onBeforeMount(() => {
  posts.value = [
    {
      name: 'Fanny Arbuckle',
      image: 'https://placehold.co/100',
      content: 'Fiddle Faddle',
      picture: 'https://placehold.co/500',
      likes: [],
    },
  ]
})
</script>
