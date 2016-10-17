<template lang="html">
    <div class="container">
        <router-view></router-view>
    </div>
    <loader v-show="loading"></loader>
</template>

<script>
// 0. Require Vue
import Vue from 'vue'
import Loader from './components/loader.vue'

// 1. Require the module
import VueMaterialComponents from 'vue-material-components'

// 2. Require the Materialize CSS (or import it in your HTML)
// import 'vue-material-components/assets/css/materialize.min.css'

// 3. Install the plugin
Vue.use(VueMaterialComponents)
export default {
    data() {
        return {
            loading: true
        }
    },
    computed: {},
    mounted() {},
    methods: {},
    components: {
        Loader
    }
}
</script>

<style lang="css">
@media screen and (max-width: 420px) {
    .container{
        width: 95% !important;
        margin: auto;
    }
}
.material-icons{
    font-size: inherit;
    margin-right: 2px;
}
img{
    width: 100%;
    display: block;
}
a{
    color: inherit;
}
</style>
