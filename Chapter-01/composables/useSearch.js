import { ref, watch } from 'vue'
async function fetchSearchResults(query) {
   return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, name: `Result for "${query}" 1` },
          { id: 2, name: `Result for "${query}" 2` }
        ]
      })
    }, 500)
  })
}

export default function useSearch(query) {
  const results = ref([])
  const loading = ref(false)

  const fetchResults = async () => {
    const q = query.value.trim()
    if (!q) {
      results.value = []
      return
    }

    loading.value = true
    try {
      const response = await fetchSearchResults(q)
      results.value = response.data
    } catch (e) {
      console.error('Search failed:', e)
      results.value = []
    } finally {
      loading.value = false
    }
  }

  watch(query, fetchResults)

  return { results, loading }
}
