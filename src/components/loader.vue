<template lang="html">
    <div class="loader-mask">
        <div class="loader">
            <md-circular-preloader flashing size="large"></md-circular-preloader>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    },
    computed: {},
    mounted() {},
    methods: {},
    components: {}
}
</script>

<style lang="sass">
.loader-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
    .loader{
        display: block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        -webkit-transform: translate3d(-50%, -50%, 0);
    }
}
</style>
