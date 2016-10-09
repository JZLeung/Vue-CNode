<template lang="html">
    <div class="">
        <top-bar></top-bar>
        <router-view
            keep-alive
        >

        </router-view>
                <loading v-show="loading" ></loading>
    </div>
</template>

<script>
import TopBar from './components/topbar';
import Loading from './components/loading'
export default {
    data() {
        return {
            loading: false
        }
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
        toggleLoading() {
            console.log('toggleLoading');
            console.log(arguments);
        }
    },
    events: {
        'toggleLoading': function(statue){
            this.loading = statue;
            console.log(statue);
        }
    },
    components: {
        TopBar,
        Loading
    }
}
</script>

<style lang="css">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a{
    color: inherit;
    text-decoration: none;
}
body{
    background: #f5f5f5;
}
ul,li,ol{
    list-style: none;
}
.container{
    margin: auto;
    padding: 20px;
    /*padding-top: 0;*/
    max-width: 1080px;

}
.left{
    float: left;
}
.right{
    float: right;
}
.clearfix:after{
    clear: both;
    content: '';
    display: block;
}
</style>
