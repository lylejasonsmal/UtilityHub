<template>
  <footer>
    <h4>Utility<span>Hub</span></h4>
  </footer>
</template>
<style scoped>
footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  border-top: 1px solid var(--border);
  margin: 0;
  z-index: 1000;
}

span{
  background: var(--primary);
  color: var(--background);
  padding: 0 5px;
  border-radius: 5px;
}
</style>
