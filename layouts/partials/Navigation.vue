<template>
<div>
<nuxt-link :to="{ name: 'index' }">
 cart
</nuxt-link>
   {{categories}}
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters({
      categories: 'categories'
    })
  },

}
</script>

