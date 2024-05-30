<i18n src="@/locales/jp/home.json"></i18n>
<i18n src="@/locales/en/home.json"></i18n>

<script setup lang="ts">
import { ref } from 'vue';
import LanguageOpt from '@/components/inputs/LanguageOpt.vue';

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
  <header>
    <div>
      <nav>
        <ul>
          <li>
            <LanguageOpt
              :options="languageOptions"
              :locale="this.$i18n.locale"
              :onLanguageChange="onLanguageChange"
            />

          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>
