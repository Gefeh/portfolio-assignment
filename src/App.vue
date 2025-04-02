<template>
  <div class="app-container">
    <header class="header">
      <h1>Benjamin Dros</h1>
      <p>A games portfolio</p>
    </header>

    <main>
      <h2>About Me</h2>
      <p>
        Hi I'm Benji! I'm a programmer and game designer working primarily with Unity and C#. I like making games.
      </p>

      <h2>Games</h2>
      <!-- Game Card -->
      <GameCard imageSrc="4CRt7_.png"
                title="SpaceCube"
                genre="Arcade/Endless Runner (2025)"
                description="A game about not crashing your spaceship into bright colorful cubes. I made this game in about a week, for a school project. Made in Unity and programmed in C#, and HTML/CSS for the UI."
                itchLink="https://ben-dros.itch.io/spacecube" />
      <!-- Game Card -->
      <GameCard imageSrc="WnRm3O.png"
                title="Last Stand"
                genre="Bullet Hell/Boss Rush (2023)"
                description="A game about surviving against the clock for as long as you can. In this 2D Bullet Hell game you must dodge many pellets being hurled your way with menace. I designed and implemented the Illuminati fight in this game. Made in Unity and programmed in C#."
                itchLink="https://kevvie303.itch.io/last-stand" />

      <h2>Contact</h2>
      <p>
        E-mail: <a href="mailto:benjamin.dros@hva.nl">benjamin.dros@hva.nl</a>
      </p>
    </main>

    <footer>
      <p>© 2025 Benjamin Dros. Most rights reserved (he knows what he did).</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
  import GameCard from './components/GameCard.vue';
</script>

<style scoped>
  .app-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
