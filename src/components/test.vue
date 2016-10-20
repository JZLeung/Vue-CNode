<template lang="html">
    <p>
        {{msg}}
    </p>
</template>

<script>
export default {
  data() {
    return {
        msg: 'From test.vue!'
    }
  },
  computed: {},
  mounted() {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
    p{
        color: red;
    }
</style>
