<template>
  <div class="loan-repayment-info-container">
    <p>Here's some facts for nerds:</p>

    <ExpandableComponent HeaderMessage="What variety of loans are there?">
      There are several types of loans, including:
      <ul>
        <li><strong>Personal Loans:</strong> Unsecured loans that can be used for various purposes, such as debt consolidation, home improvement, or medical expenses.</li>
        <li><strong>Mortgage Loans:</strong> Secured loans specifically for purchasing real estate, where the property serves as collateral.</li>
        <li><strong>Auto Loans:</strong> Secured loans for purchasing vehicles, where the vehicle serves as collateral.</li>
        <li><strong>Student Loans:</strong> Loans designed to help students pay for education-related expenses, often with favorable terms and repayment options.</li>
        <li><strong>Business Loans:</strong> Loans intended for business purposes, such as starting or expanding a business, purchasing equipment, or managing cash flow.</li>
      </ul>
    </ExpandableComponent>

    <ExpandableComponent HeaderMessage="What is the difference between fixed and variable interest rates?">
      A fixed interest rate remains constant throughout the life of the loan, providing predictable monthly payments. In contrast, a variable interest rate can fluctuate based on market conditions, which may result in changing monthly payments over time.
    </ExpandableComponent>

  </div>
</template>
<script setup>
import ExpandableComponent from '@/components/commonly_used/ExpandableComponent.vue'
</script>
<style scoped>
.loan-repayment-info-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary);
  border-radius: 15px;
  padding: 20px;
  gap: 10px;
  width: 600px;
}
</style>
