<template>
  <div class="dropdown">
    <div class="dropdown-trigger">
      <a>
        {{params.HeaderText}}
      </a>
    </div>

    <div class="dropdown-menu">
      <slot/>
    </div>
  </div>
</template>
<script setup>

const params = defineProps({
  HeaderText: String
})
</script>
<style scoped>
*{
  font-size-adjust: 0.4;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  /* Hidden by default */
  display: none;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu a {
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  color: #333;
}

.dropdown-menu a:hover {
  background-color: #f5f5f5;
}

a{
  color: var(--text-primary);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

a:hover{
  text-decoration: underline;
}
</style>
