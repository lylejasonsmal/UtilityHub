import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CompoundInterestPage from '@/pages/tools/CompoundInterestPage.vue'
import PageNotFound from '@/pages/error_handling/PageNotFound.vue'
import LoanRepaymentPage from '@/pages/tools/LoanRepaymentPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/compound-interest-calculator',
      name: 'Compound Interest Calculator',
      component: CompoundInterestPage,
      meta: { group: 'finance_tools' }
    },
    {
      path: '/loan-repayment-calculator',
      name: 'Loan Repayment Calculator',
      component: LoanRepaymentPage,
      meta: { group: 'finance_tools' }
    },
    {
      path: '/simple-interest-calculator',
      name: 'Simple Interest Calculator',
      component: null,
      meta: { group: 'finance_tools' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PageNotFound,
      meta: { group: 'errors' }
    }
  ],
})

export default router
