<template lang="html">
    <div class="header-top">
        <div class="container clearfix">
            <div class="logo left">
                <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="">
            </div>
            <div class="action right">
                <div class="no-login" v-if="!isLogin">
                    <a href="#">登录</a>
                </div>
                <div class="login" v-if="isLogin">
                    <a href="#">{{user.username}}</a>
                </div>
            </div>
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
.header-top{
    background: #444;
    color: #fff;
    padding: 5px;
    .container{
        background: transparent;
        padding: 0 10px;
    }
    .logo{
        margin-left: 10px;
        width: 100px;
    }
    .action{
        line-height: 25px;
        a{
            margin-left: 10px;
            color: inherit;
        }
    }
}
</style>
