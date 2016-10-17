<template lang="html">
<div class="col">
    <div class="card-panel grey lighten-5 z-depth-1">
        <div class="row valign-wrapper">
            <div class="col s2">
                <img :src="comment.author.avatar_url" alt="{{comment.author.loginname}}" class="circle responsive-img">
                <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
                <p>{{comment.author.loginname}} <span class="time">{{comment.create_at | formatDate}}</span></p>
                <div class="black-text">
                    {{{comment.content}}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: ['comment'],
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

<style lang="css">

</style>
