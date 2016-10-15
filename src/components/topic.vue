<template lang="html">
    <md-card class="md-card hoverable card {{topic.colorClass}}" content-class="white-text">
        <a slot="title" v-link="{name: 'topic', params: {id: topic.id}}">
            {{topic.title}}
        </a>
        <p class="card-time">
            {{topic.create_at | formatDate}}
            <md-badge class="margin-right"><i class="material-icons">visibility</i>{{topic.visit_count}}</md-badge>
            <md-badge><i class="material-icons">textsms</i>{{topic.reply_count}}</md-badge>
        </p>
    </md-card>
</template>

<script>
export default {
    props: ['topic'],
    data() {
        return {}
    },
    computed: {},
    attached() {
        // console.log(this);
    },
    methods: {},
    components: {}
}
</script>

<style lang="css">
.hoverable{
    cursor: pointer;
}
</style>
