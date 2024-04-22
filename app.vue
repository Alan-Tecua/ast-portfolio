<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.desc'),
  ogTitle: t('seo.title'),
  ogDescription: t('seo.desc'),
  ogImage: 'https://res.cloudinary.com/dd05o0vvo/image/upload/v1713794636/AlanTecuapetla-OGimage_gyzcpy.png'

})

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
