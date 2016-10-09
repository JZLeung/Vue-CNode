<template lang="html">
    <div class="content container">
        <h3 class="topic-title">{{data.title}}</h3>
        <div class="topic-content" hidden>
            {{{data.content}}}
        </div>
        <div class="comments">
            <div class="media" v-for="reply in data.replies">
                <a class="media-left" href="#">
                    <img :src="reply.author.avatar_url" alt="">
                </a>
                <div class="media-body">
                    {{{reply.content}}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ajax from '../util/ajax'
import API from '../util/api'
export default {
    data() {
        return {
            data: {
                title: '',
                content: ''
            }
        }
    },
    computed: {},
    ready() {

    },
    attached() {
        console.log('attached');
        this.fetchData();
    },
    methods: {
        fetchData() {
            var id = this.$route.params.id,
                self = this;
            console.log(id);
            self.$root.$set('loading', true);
            ajax({
                url: API.TOPIC_DETAIL + id,
                method: 'GET',
                callback(data) {
                    console.log(data);
                    self.$set('data', data.data);
                    self.$root.$set('loading', false);
                }
            })
        }
    },
    components: {}
}
</script>

<style lang="scss">
.content {
    background: #fff;
}
.topic-content {
    margin-bottom: 10px;

    padding: 10px;
}
img {
    width: 100%;
}
.comments {
    margin-top: 20px;
    .comment {
        padding: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ddd;
        background: #fff;
        .author-info {
            font-size: 14px;
        }
        .avatar {
            vertical-align: middle;
            width: 40px;
            height: 40px;
            border-radius: 999px;
            display: inline-block;
            overflow: hidden;
        }
        span.author {
            color: #999;
            font-size: 13px;
        }
        /*span.*/

    }
    .media-left{
        width: 60px;
    }
}
</style>
