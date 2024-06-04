<script setup lang="ts">
import LandingNavbar from '@/components/landing/LandingNavbar.vue';

const {t} = useI18n();
useSeoMeta ({

})
</script>
<template>
  <div class="webpage">
    <LandingNavbar/>
  </div>
<div>
  <h1>{{ $t("seo.title") }}</h1>
  <h2>{{ $t("seo.desc") }}</h2>
</div>
</template>
