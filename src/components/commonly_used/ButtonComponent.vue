<template>
  <button :class="{
  'primary-button': IsPrimary,
  'secondary-button': !IsPrimary,
  'cautionary-button': IsDanger
}" @click="params.Action">
    <MaterialDesignIcon :icon="params.Icon"/>
    {{params.ButtonText}}
  </button>
</template>
<style scoped>
button {
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  padding: 10px 20px;
  border: 1px solid var(--primary);
  border-radius: 25px;
  cursor: pointer;
  margin: 5px;
  transition: 0.2s;
}
.primary-button {
  background-color: var(--primary);
  color: var(--background);
  border: 1px solid var(--primary);
}

.secondary-button {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.cautionary-button {
  background-color: transparent;
  color: crimson;
  border: 1px solid crimson;
}

button:hover {
  opacity: 90%;
}

button:active {
  transform: scale(0.95);
}
</style>
<script setup>
import MaterialDesignIcon from '@/components/commonly_used/MaterialDesignIcon.vue'

const params = defineProps({
  ButtonText: String,
  IsPrimary: Boolean,
  IsDanger: Boolean,
  Icon: String,
  Action: Function,
})
</script>
