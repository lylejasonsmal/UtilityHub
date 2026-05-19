<template>
  <div class="expandable-container">
    <div class="expandable-header" @click="isExpanded = !isExpanded">
    <p>{{ params.HeaderMessage }}</p>
    <MaterialDesignIcon :icon="isExpanded ? 'expand_less' : 'expand_more'" />
    </div>

    <transition name="expand">
      <div v-show="isExpanded" class="expandable-content">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import MaterialDesignIcon from '@/components/commonly_used/MaterialDesignIcon.vue'

const params = defineProps({
  HeaderMessage: String,
})

const isExpanded = ref(false);

</script>
<style scoped>
.expandable-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border);
  min-width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.expandable-header{
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.expandable-header p{
  width: 80%;
  text-wrap: wrap;
}

.expandable-content{
  padding: 20px;
  opacity: 80%;
  transition: 0.5s;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.25s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
