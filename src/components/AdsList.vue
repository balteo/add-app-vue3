<template>
  <ul>
    <li v-for="ad in state.ads" :key="ad.id">
      {{ ad.title }},
      {{ ad.description }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'

export default defineComponent({
  name: 'AdsList',
  props: {
    filter: null
  },
  setup (props) {
    const state = reactive({
      ads: []
    })

    watchEffect(async () => {
      const response = await fetch('/api/ads?q=' + props.filter)
      state.ads = await response.json()
    })

    return { state }
  }

})
</script>
