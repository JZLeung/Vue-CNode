<template lang="html">
    <div class="navbar">
        <div class="container">
            <div class="navaction" @click="init('')">全部</div>
        <div class="navaction" @click="init('good')">精华</div>
        <div class="navaction" @click="init('share')">分享</div>
        <div class="navaction" @click="init('ask')">问答</div>
        <div class="navaction" @click="init('job')">招聘</div>
        </div>
    </div>
    <div class="container">
        <div class="topic" v-for="topic in topics">
            <a v-link="{name: 'topic', params: {id: topic.id}}"><h4 class="topic-title">{{topic.title}}</h4></a>
            <!-- <div class="topic-content">{{{topic.content}}}</div> -->
            <span class="topic-time">{{topic.create_at | formatDate}}</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span class="topic-replys">{{topic.reply_count}}</span>
        </div>
    </div>
</template>

<script>
    import ajax from '../util/ajax';
    import API from '../util/api';
    import Vue from 'vue';

    Vue.filter('formatDate', (input) => {
        var date = new Date(input),
            formater = 'YYYY-MM-DD HH:mm';
        return formater.replace(/Y{4}/g, date.getFullYear())
                        .replace(/M{2}/g, date.getMonth()+1)
                        .replace(/D{2}/g, date.getDate())
                        .replace(/HH/g, date.getHours())
                        .replace(/mm/g, date.getMinutes())
                        .replace(/ss/g, date.getSeconds())
    })

    export default {
        data() {
            return {
                topics: [],
                // type: '全部',
                loading: true
            }
        },
        computed: {},
        ready() {

        },
        attached() {
            console.log('Home.vue attached');
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
                        this.$set('topics', data.data);
                        // this.loading = false;
                        // this.$set('loading', false);
                        this.$root.$set('loading', false);
                        this.$emit('toggleLoading', false);
                    }
                })
            }
        },
        components: {}
    }
</script>

<style lang="scss">
.topic{
    margin: 10px 20px;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 1px 2px rgba(0,0,0,0.2);
    background: #fff;
    .topic-title{
        margin: 10px 0;
    }
    .topic-time, .topic-replys{
        font-size: 0.8em;
        color: #bbb;
    }
}
.navbar{
    background: #444;
    .container{
        padding: 0;
        font-size: 14px;
        display: flex;
        display: -webkit-flex;
        flex: row no-wrap;
        .navaction{
            flex-grow: 1;
            padding: 10px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
