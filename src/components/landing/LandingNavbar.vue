<!-- <i18n src="@/locales/jp/home.json"></i18n>
<i18n src="@/locales/en/home.json"></i18n> -->

<script setup lang="ts">
import { ref } from 'vue';
import LanguageOpt from '@/components/inputs/LanguageOpt.vue';

const props = defineProps<{
  rootLocaleUrl?: string
}>()

const linkHref = ref(props.rootLocaleUrl ? props.rootLocaleUrl : '')
const isNavOpen = ref(false)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
  document.body.classList.toggle("dropdown-open", isNavOpen.value);
}

const closeNav = () => {
  isNavOpen.value = false;
  document.body.classList.remove("dropdown-open");
}

const languageOptions = ref([
  {value: 'jp', label: '日本語'},
  {value: 'en', label: 'English'},
  {value: 'es', label: 'Español'},
])

const onLanguageChange = (option)=> {
  const paths = window.location.pathname.replace(/^\//, '').replace(/\/$/, '').split('/');
  const route = (paths.length && paths[0].length === 2 ? paths.slice(1) : paths).join('/');
  const toUrl = '/' + ((option.value === "ja" ? '' : option.value + '/') + route).replace(/\/$/, '');
  closeNav();
  window.location.href = toUrl;
}

</script>

<template>
  <header :class="`header is-opened ${isNavOpen ? 'is-opened':''}`">
    <div class="container header__wrapper">
      <a :href="linkHref" @click="closeNav"><img src="/public/images/logos/Alan-light-logo.svg" style="width: 2rem;" class="logo_header" alt="AlanTecuapetla" loading="lazy"/></a>
      <nav>
        <ul>
          <li>
              <LanguageOpt/>
              <!-- <LanguageOpt
                :options="languageOptions"
                :onLanguageChange="onLanguageChange"
              /> -->
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>
