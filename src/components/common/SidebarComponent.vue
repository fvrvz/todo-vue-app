<script lang="ts" setup>
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import IconButton from './IconButton.vue'
import { injectConfigService } from '@/services/config.service'

const configService = injectConfigService()
const links = configService?.getProperty<Record<string, string>>('social-links')
const profileImage = configService?.getProperty<string>('profile-image')
</script>

<template>
  <article>
    <header>
      <img :src="profileImage" alt="profile-img" />
      <hgroup class="center">
        <p class="pico-color-cyan-500"><strong>Faraaz Khan</strong></p>
        <p><small>Software Developer</small></p>
      </hgroup>
    </header>
    <main>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit assumenda dolore placeat!
      Corporis quae rerum quia earum reprehenderit tenetur provident adipisci cupiditate beatae
      esse! Rerum.
    </main>
    <footer>
      <p>Let's Connect:</p>
      <div class="social-icon-container">
        <IconButton :icon="faGithub" :href="links?.github" />
        <IconButton :icon="faLinkedin" :href="links?.linkedin" />
      </div>
      <small class="pico-color-grey-450"
        >Copyright &copy; F8Z Labs &VerticalLine; {{ new Date().getFullYear() }}</small
      >
    </footer>
  </article>
</template>

<style scoped>
article {
  margin: unset;
  padding: 0 1rem;
}

header {
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 35%;
    border-radius: 50%;
  }
}

.social-icon-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  :hover {
    color: var(--pico-color-cyan-650);
  }
}

.center {
  text-align: center;
}
</style>
