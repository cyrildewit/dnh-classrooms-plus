<template>
  <div>

      <site-header></site-header>

      <nuxt/>

  </div>
</template>

<script>
import SiteHeader from '../components/default/site-header';

export default {
  components: {
    SiteHeader,
  }
}
</script>
