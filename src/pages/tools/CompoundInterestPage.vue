<template>
  <div class="content">
    <h1 class="large-text">Compound Interest Calculator</h1>

    <div class="main-content">
      <AdSenseVerticalPaneComponent/>
      <CompoundInterestCalculatorComponent/>
      <AdSenseVerticalPaneComponent/>
    </div>

    <CompoundInterestInfoComponent/>
    <AdSenseHorizontalPaneComponent/>
  </div>
</template>
<script setup>
  import CompoundInterestInfoComponent from '@/components/compound_interest/CompoundInterestInfoComponent.vue'
  import CompoundInterestCalculatorComponent from '@/components/compound_interest/CompoundInterestCalculatorComponent.vue'
  import AdSenseVerticalPaneComponent from '@/components/commonly_used/AdSenseVerticalPaneComponent.vue'
  import AdSenseHorizontalPaneComponent from '@/components/commonly_used/AdSenseHorizontalPaneComponent.vue'
</script>
<style scoped>
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.main-content{
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 20px;
  width: 100%;
}
</style>
