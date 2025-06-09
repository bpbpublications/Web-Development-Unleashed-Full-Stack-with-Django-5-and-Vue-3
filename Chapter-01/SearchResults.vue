<script>
import { ref } from 'vue'
import useSearch from './composables/useSearch'

export default {
  setup() {
    const query = ref('')
    const { results, loading } = useSearch(query)
    
    return {
      query,
      results,
      loading
    }
  }
}
</script>

<template>
    <div>
  <input v-model="query" placeholder="Search..." />
  <p v-if="loading">Loading...</p>
  <ul v-else>
  <li v-for="item in results" :key="item.id">{{ item.name }}</li>
  </ul>
</div>
</template>
