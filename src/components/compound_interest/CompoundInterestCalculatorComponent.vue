<template>
  <CardWrapperComponent>
  <div class="container">
    <div class="content">
      <strong>Principal Amount</strong>
      <input placeholder="Enter your principal amount" type="number" v-model="principalAmount" />

      <strong>Interest Rate (%)</strong>
      <input placeholder="Enter your interest rate (%)" type="number" v-model="interestRatePercentage" />

      <strong>Repayment period (In Months)</strong>
      <input placeholder="Enter your repayment period (In months)" type="number" v-model="repaymentPeriodInMonths" />


      <strong>Compounding Frequency</strong>
      <div class="compound-frequencies-container">
        <div class="compound-frequency-container" :class="(selectedCompoundingFrequency === CompoundingFrequency.Daily) ? 'selected' : ''" @click="SelectCompoundingFrequency(CompoundingFrequency.Daily)">
          <p>Daily</p>
        </div>

        <div class="compound-frequency-container" :class="(selectedCompoundingFrequency === CompoundingFrequency.Weekly) ? 'selected' : ''" @click="SelectCompoundingFrequency(CompoundingFrequency.Weekly)">
          <p>Weekly</p>
        </div>

        <div class="compound-frequency-container" :class="(selectedCompoundingFrequency === CompoundingFrequency.Monthly) ? 'selected' : ''" @click="SelectCompoundingFrequency(CompoundingFrequency.Monthly)">
          <p>Monthly</p>
        </div>

        <div class="compound-frequency-container" :class="(selectedCompoundingFrequency === CompoundingFrequency.Quarterly) ? 'selected' : ''" @click="SelectCompoundingFrequency(CompoundingFrequency.Quarterly)">
          <p>Quarterly</p>
        </div>

        <div class="compound-frequency-container" :class="(selectedCompoundingFrequency === CompoundingFrequency.SemiAnnually) ? 'selected' : ''" @click="SelectCompoundingFrequency(CompoundingFrequency.SemiAnnually)">
          <p>Semi-Annually</p>
        </div>

        <div class="compound-frequency-container" :class="(selectedCompoundingFrequency === CompoundingFrequency.Yearly) ? 'selected' : ''" @click="SelectCompoundingFrequency(CompoundingFrequency.Yearly)">
          <p>Yearly</p>
        </div>

      </div>

      <div>
        <ButtonComponent ButtonText="Calculate" :IsPrimary="true" Icon="calculate" :Action="CalculateCompoundInterest" />
        <ButtonComponent ButtonText="Clear" :IsPrimary="false" :IsDanger="true" Icon="delete" :Action="ClearFields" />
      </div>
    </div>

    <div class="content">
      <ExpandableComponent HeaderMessage="Summary">
        <p><strong>Principal Amount:</strong> {{ principalAmount }}</p>
        <p><strong>Interest Rate:</strong> {{ interestRatePercentage }}%</p>
        <p><strong>Repayment Period:</strong> {{ repaymentPeriodInMonths }} months</p>
        <p><strong>Compounding Frequency:</strong> {{ selectedCompoundingFrequency }}</p>
      </ExpandableComponent>
      <strong>Total Amount:</strong>
      <h1 class="large-text">{{ totalAmount }}</h1>
    </div>
  </div>
  </CardWrapperComponent>
</template>
<script setup lang="ts">
import ButtonComponent from '@/components/commonly_used/ButtonComponent.vue'
import { ref } from 'vue'
import ExpandableComponent from '@/components/commonly_used/ExpandableComponent.vue'
import CardWrapperComponent from '@/components/commonly_used/CardWrapperComponent.vue'

const principalAmount = ref()
const interestRatePercentage = ref()
const repaymentPeriodInMonths = ref()
const totalAmount = ref(0)
const selectedCompoundingFrequency = ref()

const CompoundingFrequency = {
  Daily: 'daily',
  Weekly: 'weekly',
  Monthly: 'monthly',
  Quarterly: 'quarterly',
  SemiAnnually: 'semi-annually',
  Yearly: 'yearly',
}
function ClearFields() {
  principalAmount.value = null
  interestRatePercentage.value = null
  repaymentPeriodInMonths.value = null
  selectedCompoundingFrequency.value = null
  totalAmount.value = 0
}
function CalculateCompoundInterest() {
  if (!principalAmount.value || !interestRatePercentage.value || !repaymentPeriodInMonths.value || !selectedCompoundingFrequency.value) {
    alert('Please fill in all fields and select a compounding frequency.');
    return;
  }

  const principal = parseFloat(principalAmount.value);
  const interestRate = parseFloat(interestRatePercentage.value) / 100;
  const months = parseInt(repaymentPeriodInMonths.value);

  let n; //number of times interest is compounded per year

  switch (selectedCompoundingFrequency.value) {
    case CompoundingFrequency.Daily:
      n = 365;
      break;
    case CompoundingFrequency.Weekly:
      n = 52;
      break;
    case CompoundingFrequency.Monthly:
      n = 12;
      break;
    case CompoundingFrequency.Quarterly:
      n = 4;
      break;
    case CompoundingFrequency.SemiAnnually:
      n = 2;
      break;
    case CompoundingFrequency.Yearly:
      n = 1;
      break;
    default:
      alert('Invalid compounding frequency selected.');
      return;
  }

  const t = months / 12; //time in years
  totalAmount.value = (principal * Math.pow(1 + interestRate / n, n * t)).toFixed(2);
}

function SelectCompoundingFrequency(frequency) {
  selectedCompoundingFrequency.value = frequency;
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-height: 50vh;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  height: 100%;
}
.compound-frequencies-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

.compound-frequency-container {
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 5px;
  transition: 0.3s;
}

.compound-frequency-container:hover {
  border-color: var(--primary);
}

.selected{
  background-color: var(--primary);
  color: var(--background);
}
</style>
