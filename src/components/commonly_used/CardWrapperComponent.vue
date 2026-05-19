<template>
    <div class="card-wrapper">
      <slot></slot>
    </div>
</template>
<style scoped>
.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 10px;
}
</style>
