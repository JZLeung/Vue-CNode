<template lang="html">
    <md-navbar title="CNode" left hamburger mode="hide-on-med-and-down">
        <md-nav-item  @click="init('all')">全部</md-nav-item>
        <md-nav-item  @click="init('good')">精华</md-nav-item>
        <md-nav-item  @click="init('share')">分享</md-nav-item>
        <md-nav-item  @click="init('ask')">问答</md-nav-item>
        <md-nav-item  @click="init('job')">招聘</md-nav-item>
    </md-navbar>
    <topic :topic='topic' v-for="topic in topics">
        <p>
            alskdfjaklsdf
        </p>
    </topic>
</template>

<script>
import ajax from '../util/ajax';
import API from '../util/api';

import Topic from '../components/topic.vue';

var colors = [
    'purple',
    'cyan',
    'teal',
    'orange',
    'indigo',
    'blue-grey',
    'green'
],colorLength = colors.length;



export default {
    data() {
        return {
            topics: []
        }
    },
    computed: {},
    attached() {
        console.log('attached');
        this.init();
    },
    methods: {
        init(type) {
            console.log('Home.vue init');
            this.$root.$set('loading', true);
            console.log(type);
            ajax({
                url: API.TOPICS,
                method: 'GET',
                params: {
                    page: 1,
                    limit: 20,
                    tab: type
                },
                callback: (data) => {
                    console.log(data);
                    for(var i = 0 , len = data.data.length; i < len ; i ++){
                        var randomNum = Math.floor(Math.random() * colorLength) - 1,
                            randomLight = Math.floor(Math.random() * 4);
                        var color = colors[randomNum < 0 ? 0 : randomNum],
                            lighten = randomLight % 2 == 0 ? 'lighten' : 'darken';
                        var className = color +' '+ lighten +'-'+ randomLight;
                        // console.log(randomNum, '' , randomLight, className);
                        data.data[i]['colorClass'] = className;
                    }
                    this.$set('topics', data.data);
                    // this.loading = false;
                    // this.$set('loading', false);
                    this.$root.$set('loading', false);
                    // this.$emit('toggleLoading', false);
                }
            })
        }
    },
    components: {
        Topic
    }
}
</script>

<style lang="css">
.card .card-title{
    font-size: 16px;
}
.card .card-content .card-title{
    line-height: 20px;
}
.card .card-time{
    margin-top: 15px !important;
    font-size: 13px;
    color: #999;
}
.margin-right{
    margin-right: 5em;
}
.card span.badge{
    color: #fff;
}
</style>
