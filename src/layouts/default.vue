<script setup lang="ts">
import { useRoute } from 'vue-router';
import LanguageOpt from '@/components/inputs/LanguageOpt.vue';

const route = useRoute();

// console.log(route.meta.title);
// console.log(route.meta.ogImage);
// console.log(route.meta.description);
// console.log('fix me later');

useHead({
  meta: [
    {property: 'title', content: `${route.meta.title}`},
    {property: 'og:title', content: `${route.meta.title}`},
    {property: 'og:image', content: `${route.meta.ogImage}`},
    {property: 'description', content: `${route.meta.description}`},
    {property: 'og:description', content: `${route.meta.ogDescription}`},
  ]
})

</script>

<template>
  <div>
    <header class="">
      <nav class="">
        <div class="">
          <a href="/">
            <img class="" src="" alt="">
          </a>
        </div>
        <div>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="">
      <SectionFooter/>
    </footer>
  </div>
</template>
