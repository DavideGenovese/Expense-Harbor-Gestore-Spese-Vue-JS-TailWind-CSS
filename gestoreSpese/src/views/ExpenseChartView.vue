<template>
  <div class="expense-chart-view container mx-auto bg-gray-900">
      <ExpenseChart :expenses="expenses" />

  </div>
</template>

<script>
import ExpenseChart from "@/components/ExpenseChart.vue";

export default {
  components: {
    ExpenseChart,
  },
  data() {
    return {
      expenses: [],
    };
  },
  created() {
    this.fetchExpenses();
  },
  methods: {
    fetchExpenses() {
      const storedExpenses = localStorage.getItem("item");
      if (storedExpenses) {
        this.expenses = JSON.parse(storedExpenses);
      }
    },
  },
};
</script>
