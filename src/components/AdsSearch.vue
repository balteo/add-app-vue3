<template>
  <div>
    <form @submit.prevent="onSearch">
      <label for="searchInput">Search</label>
      <input id="searchInput" type="text" v-model="state.searchInput">
      <input type="submit" value="Search">
    </form>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'AdsSearch',
  setup (props, { emit }) {
    const state = reactive({
      searchInput: ''
    })

    function onSearch () {
      console.log(state.searchInput)
      emit('on-search', state.searchInput)
    }

    return {
      state,
      onSearch
    }
  }

})
</script>
