<script setup lang="ts">
import LanguageLabel from '@/components/labels/LanguageLabel.vue';

type PropsType = {
  onLanguageChange?: (languageId: string) => void,
}

const props = defineProps<PropsType>();

const { locale } = useI18n();

const languageIds = [
  'en',
  'ja',
  'es',
];

const isRendered = ref(false); // To only render once mounted
const isOpen = ref(false);

const toggleDropdown = (force?: boolean) => {
  isOpen.value = typeof force === 'boolean' ? force : !isOpen.value;
}

const selectLanguage = (languageId: string) => {
  toggleDropdown(false);
  doDietChange(languageId);
}

const keyHandler = (event: any) => {
  if (event.key === 'Escape') {
    toggleDropdown(false);
  }
}

const doDietChange = (languageId?: string) => {
  locale.value = languageId || 'en';
  localStorage.setItem("lang", locale.value);

  if (props.onLanguageChange) {
    props.onLanguageChange(locale.value);
  }
}

onMounted(() => {
  const localStoreLang = localStorage.getItem("lang");
  if (localStoreLang && languageIds.includes(localStoreLang)) {
    if (props.onLanguageChange && localStoreLang !== locale.value) {
      props.onLanguageChange(localStoreLang);
    }

    locale.value = localStoreLang;
  }

  isRendered.value = true;
})

</script>

<template>
  <div class="dropdown" v-bind:class="{ 'is-open': isOpen }">
    <button
      class="dropdown-button bg-transparent border-not-hover p-05"
      type="button"
      role="menuitem"
      aria-label="Language"
      aria-haspopup="true"
      tabindex="0"
      @click="toggleDropdown()"
      >
      <span v-show="isRendered" class="flex-inline ai-center colgap-05 text-nowrap">
        <img :src="`/images/flags/${locale.toLowerCase()}.png`" class="h-1em" :alt="`${locale} flag`" loading="lazy" />
        {{ locale.toUpperCase() }}
        <span>
          <sup v-if="isOpen"> ︽</sup>
          <sub v-else> ︾</sub>
        </span>
      </span>
    </button>
    <dialog class="p-0 w-100" role="menu" :open="isOpen">
      <div class="dropdown-content dropdown-content-right dropdown-content-fit border-radius-small bg-white">
        <section class="dropdown-content-scrollable">
          <div class="dropdown-content-scrollable-content">
            <ul>
              <li
                v-for="language in languageIds"
                role="menuitem"
                tabindex="-1"
                @click="selectLanguage(language)"
                class="p-1"
                >
                <span>
                  <LanguageLabel :language="language" />
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </dialog>
  </div>
</template>
