<template lang="html">
    <div class="loading-mask">
        <div class="loading-loader">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
}
</script>

<style lang="scss">
.loading-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background: rgba(255,255,255,0.6);
    .loading-loader{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        -webkit-transform: translate3d(-50%, -50%, 0);

        .loader{
            width: 50px;
            height: 50px;
            border: 10px solid transparent;
            border-radius: 9999px;
            border-right-color: #666;
            border-left-color: #999;
            animation: loading 1s infinite;
            -webkit-animation: loading 1s infinite linear;
        }
    }
}
@keyframes loading {
    0%{transform: rotate(0deg);}
    /*50%{transform: rotate(180deg);}*/
    100%{transform: rotate(360deg);}
}
@-webkit-keyframes loading {
    0%{-webkit-transform: rotate(0deg);}
    /*50%{-webkit-transform: rotate(180deg);}*/
    100%{-webkit-transform: rotate(360deg);}
}
</style>
