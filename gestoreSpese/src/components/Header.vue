<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="flex justify-between items-center text-2xl font-bold p-4">
      <div>Logo</div>
      <div class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/list">List</RouterLink>
      </div>
    </nav>
  </header>
</template>
