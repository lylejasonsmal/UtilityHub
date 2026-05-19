<template>
  <span class="material-symbols-outlined">{{params.icon}}</span>
</template>
<script setup>
const params = defineProps({
  icon: String,
})
</script>