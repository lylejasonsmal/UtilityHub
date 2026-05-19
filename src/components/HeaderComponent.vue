<template>
  <header>
    <h4>Utility<span class="logo-span">Hub</span></h4>
    <nav>
      <router-link
        v-for="route in mainRoutes"
        :key="route.path"
        :to="route.path"
        :class="router.currentRoute.value === route.path ? 'active' : ''"
      >
        {{ route.name }}
      </router-link>
      <HeaderDropdownMenuComponent HeaderText="Finance Tools">
          <router-link
            v-for="route in toolsRoutes"
            :key="route.path"
            :to="route.path"
            :class="{ active: router.currentRoute.value.path === route.path }"
          >
            {{ route.meta?.title || route.name }}
          </router-link>
      </HeaderDropdownMenuComponent>
    </nav>
  </header>
</template>
<script setup>
import router from '@/router/index.js'
import { ref } from 'vue'
import HeaderDropdownMenuComponent from '@/components/commonly_used/HeaderDropdownMenuComponent.vue'

const mainRoutes = ref(router.getRoutes().filter(x=>x.meta?.group !== 'finance_tools' && x.name !== 'NotFound'))
const toolsRoutes = ref(router.getRoutes().filter(x=>x.meta?.group === 'finance_tools'))

</script>
<style scoped>
header{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--border);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  backdrop-filter: blur(20px);
  height: 60px;
  z-index: 1000;
}

nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

a{
  color: var(--text-primary);
  text-decoration: none;
  font-size-adjust: 0.4;
  display: inline-flex;
  align-items: center;
}

a:hover{
  text-decoration: underline;
}

.active{
  font-weight: bold;
}

.logo-span{
  background: var(--primary);
  color: var(--background);
  padding: 0 5px;
  border-radius: 5px;
}

@media (max-width: 600px) {
  nav{
    display: none;
  }
}

</style>
