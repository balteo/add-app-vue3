<template>
  <div class="home">
    <AdsSearch @on-search="search"/>
    <AdsList :filter="state.inputSearch"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import AdsSearch from '@/components/AdsSearch.vue'
import AdsList from '@/components/AdsList.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    AdsSearch,
    AdsList
  },
  setup () {
    const state = reactive({
      inputSearch: ''
    })

    function search (inputSearch: string) {
      state.inputSearch = inputSearch
    }

    return {
      state,
      search
    }
  }
})
</script>
