<template>
  <div class="compound-interest-info-container">
    <p>Here's some facts for nerds:</p>

    <ExpandableComponent HeaderMessage="What is compound interest?">
      Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods. It allows your money to grow faster over time compared to simple interest, which is calculated only on the principal amount.

      <p><strong>A = P(1 + r/n)^(nt)</strong></p>
      <p>Where:</p>
      <ul>
        <li><strong>A</strong> = the future value of the investment/loan, including interest</li>
        <li><strong>P</strong> = the principal amount (initial investment or loan)</li>
        <li><strong>r</strong> = the annual interest rate (in decimal form)</li>
        <li><strong>n</strong> = the number of times that interest is compounded per year</li>
        <li><strong>t</strong> = the time the money is invested or borrowed for, in years</li>
      </ul>

    </ExpandableComponent>

    <ExpandableComponent HeaderMessage="What is the principal amount?">
      The principal amount is the initial sum of money that you invest or borrow. It is the starting point for calculating interest, and it can grow over time with compound interest.
    </ExpandableComponent>

    <ExpandableComponent HeaderMessage="What is the interest rate and how does it affect the outcome?">
      The interest rate is the percentage at which your money grows over a specific period. A higher interest rate will result in faster growth of your investment or loan, while a lower interest rate will lead to slower growth. The interest rate is a crucial factor in determining the total amount you will have after a certain period with compound interest.
    </ExpandableComponent>

    <ExpandableComponent HeaderMessage="What is compounding frequency and how does it affect the outcome?">
      Compounding frequency refers to how often the interest is calculated and added to the principal. Common compounding frequencies include daily, weekly, monthly, quarterly, semi-annually, and annually. The more frequently interest is compounded, the faster your money will grow, as interest is being calculated on an increasingly larger principal amount.
    </ExpandableComponent>

    <ExpandableComponent HeaderMessage="What are common real-life applications of compound interest?">
      Compound interest is commonly used in various financial contexts, including:
      <ul>
        <li><strong>Savings Accounts:</strong> Banks often offer compound interest on savings accounts, allowing your money to grow over time.</li>
        <li><strong>Investment Growth:</strong> Compound interest is a key factor in the growth of investments, such as stocks, bonds, and mutual funds.</li>
        <li><strong>Loans and Mortgages:</strong> When you take out a loan or mortgage, the interest may be compounded, which can affect the total amount you repay over time.</li>
        <li><strong>Retirement Accounts:</strong> Compound interest plays a crucial role in the growth of retirement accounts like 401(k)s and IRAs.</li>
      </ul>
    </ExpandableComponent>
    </div>
</template>
<script setup>
import ExpandableComponent from '@/components/commonly_used/ExpandableComponent.vue'
</script>
<style scoped>
.compound-interest-info-container{
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
