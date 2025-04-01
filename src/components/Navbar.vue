<template>
  <nav class="bg-gray-800 p-4">
    <ul class="flex space-x-4">
      <li>
        <router-link to="/" class="text-white hover:text-gray-300">Games</router-link>
      </li>
      <li>
        <a href="https://youritch.io" target="_blank" class="text-white hover:text-gray-300">Itch.io</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Navbar',
})
</script>
