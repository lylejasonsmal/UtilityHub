<template>
  <div class="content">
    <h1 class="large-text">Loan Repayment Calculator</h1>

    <div class="main-content">
    <AdSenseVerticalPaneComponent/>
    <LoanRepaymentCalculatorComponent/>
    <AdSenseVerticalPaneComponent/>
  </div>

    <LoanRepaymentInfoComponent/>
    <AdSenseHorizontalPaneComponent/>
  </div>
</template>
<script setup>
import LoanRepaymentCalculatorComponent from '@/components/loan_repayment/LoanRepaymentCalculatorComponent.vue'
import LoanRepaymentInfoComponent from '@/components/loan_repayment/LoanRepaymentInfoComponent.vue'
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

