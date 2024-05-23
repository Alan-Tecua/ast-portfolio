<script setup lang="ts">
import { computed } from 'vue';

type PropsType = {
  language: string,
}

const props = defineProps<PropsType>();

const displayLanguage = computed(():string => {
  switch (props.language.toLowerCase()) {
    case 'jp':
      return '日本語'
    case 'en':
      return 'English'
    case 'es':
      return 'Español'
  }

  return props.language;
})
</script>

<template>
  <span class="flex-inline ai-center colgap-1 text-nowrap">
    <img :src="`/images/flags/${language.toLowerCase()}.png`" class="h-1em" :alt="`${language} flag`" loading="lazy" />
    <span>{{ displayLanguage }}</span>
  </span>
</template>
