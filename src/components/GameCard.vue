<template>
  <!-- Entire card is clickable via the anchor wrapper -->
  <a :href="itchLink" target="_blank" class="game-card-wrapper">
    <div class="game-card">
      <img :src="imageSrc" :alt="title" class="game-card-image" />
      <div class="game-card-content">
        <div class="game-card-text">
          <h3 class="game-card-title">{{ title }}</h3>
          <p class="game-card-genre">{{ genre }}</p>
          <p class="game-card-description" v-if="description">{{ description }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts" setup>
  interface Props {
    imageSrc: string;
    title: string;
    genre: string;
    itchLink: string;
    description?: string;
  }

  const props = defineProps<Props>();
</script>

<style scoped>
  /* Make the entire card clickable */
  .game-card-wrapper {
    text-decoration: none;
    display: block;
  }

  /* Base card styling */
  .game-card {
    display: flex;
    align-items: center;
    border: 1px solid #444;
    padding: 12px;
    border-radius: 4px;
    background-color: #222;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: background-color 0.5s ease;
  }

  /* On hover, animate with a smoother, extended floating effect and lighten the background */
  .game-card-wrapper:hover .game-card {
    animation: float 6s ease-in-out infinite;
    background-color: #333;
  }

  /* Keyframes for a smoother, subtle random movement with a fixed right offset */
  @keyframes float {
    0% {
      transform: translate(25px, 0px);
    }

    25% {
      transform: translate(27px, -1px);
    }

    50% {
      transform: translate(25px, 1px);
    }

    75% {
      transform: translate(28px, 0px);
    }

    100% {
      transform: translate(25px, 0px);
    }
  }

  /* Image styling */
  .game-card-image {
    width: 130px;
    height: 130px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 15px;
  }

  /* Content container */
  .game-card-content {
    display: flex;
    align-items: center;
    flex: 1;
  }

  /* Text container */
  .game-card-text {
    flex: 1;
  }

  .game-card-title {
    margin: 0;
    font-size: 1.3rem;
    color: #d3d3d3;
  }

  .game-card-genre {
    margin: 6px 0;
    font-size: 0.95rem;
    color: #aaaaaa;
  }

  .game-card-description {
    margin: 6px 0;
    font-size: 0.9rem;
    color: #cccccc;
  }
</style>
