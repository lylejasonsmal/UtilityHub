<template>
  <CardWrapperComponent>
  <div class="calculator-container">
    <div class="input-group">
      <strong>Loan Amount</strong>
      <input placeholder="Enter your loan amount" type="number" v-model="loanAmount" />

      <strong>Interest Rate (%)</strong>
      <input placeholder="Enter your interest rate (%)" type="number" v-model="interestRatePercentage" />
      <strong>Repayment period (In Months)</strong>
      <input placeholder="Enter your repayment period (In months)" type="number" v-model="repaymentPeriodInMonths" />
      <div>
        <ButtonComponent ButtonText="Calculate" :IsPrimary="true" Icon="calculate" :Action="CalculateLoanRepayment" />
        <ButtonComponent ButtonText="Clear" :IsPrimary="false" :IsDanger="true" Icon="delete" :Action="ClearFields" />
      </div>

    </div>

      <ExpandableComponent HeaderMessage="Summary">
        <p><strong>Loan Amount:</strong> {{ loanAmount }}</p>
        <p><strong>Interest Rate:</strong> {{ interestRatePercentage }}%</p>
        <p><strong>Repayment Period:</strong> {{ repaymentPeriodInMonths }} months</p>
        <p><strong>Total Repayment Amount:</strong> {{ totalRepaymentAmount }}</p>
      </ExpandableComponent>
  </div>
  </CardWrapperComponent>
</template>
<script setup>
import ButtonComponent from '@/components/commonly_used/ButtonComponent.vue'
import ExpandableComponent from '@/components/commonly_used/ExpandableComponent.vue'
import { ref } from 'vue'
import CardWrapperComponent from '@/components/commonly_used/CardWrapperComponent.vue'

const loanAmount = ref()
const interestRatePercentage = ref()
const repaymentPeriodInMonths = ref()
const totalRepaymentAmount = ref()

function CalculateLoanRepayment() {
  const monthlyInterestRate = (interestRatePercentage.value / 100) / 12
  const numberOfPayments = repaymentPeriodInMonths.value
  const monthlyPayment = (loanAmount.value * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
  totalRepaymentAmount.value = monthlyPayment * numberOfPayments
}

function ClearFields() {
  loanAmount.value = null
  interestRatePercentage.value = null
  repaymentPeriodInMonths.value = null
  totalRepaymentAmount.value = null
}
</script>
<style scoped>
.calculator-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.input-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>

