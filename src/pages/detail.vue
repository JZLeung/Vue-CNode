<template>
<div class="details">
    <md-navbar>
        <div class="col s12" slot="content">
            <a v-link="{name: 'home'}" class="breadcrumb">首页</a>
            <span class="breadcrumb">文章详情</span>
        </div>
    </md-navbar>
    <md-card>
        <span slot="title">{{data.title}}</span>
        <p class="small-text">
            <span class="span"><i class="material-icons">perm_identity</i>{{data.author.loginname}}</span>
            <span class="span time"><i class="material-icons">query_builder</i>{{data.create_at | formatDate}}</span>
            <span class="span"><i class="material-icons">visibility</i>{{data.visit_count}}</span>

        </p>
        <hr class="divider">
        <div>
            {{{data.content}}}
        </div>

    </md-card>
    <div class="col s12">
        <Comment :comment="comment" v-for="comment in data.replies"></Comment>
    </div>
</div>
</template>

<script>
import ajax from '../util/ajax';
import API from '../util/api';

import Comment from '../components/comment.vue'

export default {
    data() {
        return {
            data: {
                author: {},
                replies: []
            }
        }
    },
    computed: {},
    ready() {},
    attached() {
        this.fetchData(this.$route.params.id);
        this.$root.$set('loading', true);
    },
    methods: {
        fetchData(id){
            var self = this;
            ajax({
                url: API.TOPIC_DETAIL+id,
                method: 'GET',
                // data: {id: }
                // params: {id: id},
                callback(data){
                    console.log(data);
                    self.$set('data', data.data);
                    self.$root.$set('loading', false);

                }
            })
        }
    },
    components: {Comment}
}
</script>

<style lang="scss">
nav{
    background-color: #666;
    padding: 0 10px;
}
span.span{
    margin-right: 20px;
}
span.time{
    color: #aaa;
    font-size: 12px;
}
pre{
    background: #f5f5f5;
    padding: 0.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 6px;
}
@media screen and (max-width: 420px) {
    h1,h2{
        font-size: 16px !important;
    }
    h3,h4{
        font-size: 15px !important;
    }
    h5,h6{
        font-size: 14px !important;
    }
}
</style>
