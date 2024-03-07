<template>
  <div
    class="h-[700px] bg-gray-700 expense-chart-view container max-w-[1200px] m-auto my-8 rounded-xl"
  >
    <canvas ref="expenseChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  props: {
    expenses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expenseChart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.expenseChart.getContext("2d");
      const categories = [
        ...new Set(this.expenses.map((exp) => exp.categoria)),
      ];
      const data = categories.map((cat) => {
        const categoryExpenses = this.expenses.filter(
          (exp) => exp.categoria === cat
        );
        const totalAmount = categoryExpenses.reduce(
          (acc, curr) => acc + curr.importo,
          0
        );
        return totalAmount;
      });
      this.expenseChart = new Chart(ctx, {
        type: "polarArea",
        data: {
          labels: categories,
          datasets: [
            {
              label: "Spese per Categoria",
              data: data,
              backgroundColor: categories.map(
                () => `hsl(${Math.random() * 360}, 100%, 75%)`
              ),
              borderColor: categories.map(() => `#111827`),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: "white",
              },
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        },
      });
    },
  },
  watch: {
    expenses: {
      deep: true,
      handler() {
        this.expenseChart.destroy();
        this.renderChart();
      },
    },
  },
};
</script>
