<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">My Games</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Repeat for each game -->
      <div class="border p-4 rounded hover:shadow-lg">
        <img src="/path-to-game-thumbnail.jpg" alt="Game Thumbnail" class="w-full rounded" />
        <h2 class="text-xl mt-2">Game Title</h2>
        <p class="text-gray-600">A short description of the game.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Games',
})
</script>
