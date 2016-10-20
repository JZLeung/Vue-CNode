<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="topics" v-for="topic in topics">
      <h3 class="title">{{topic.title}}</h3>
      <p><small>{{topic.create_at | parseDate}}</small></p>
  </div>
</template>

<script>
import Vue from 'vue';
import Topics from '../utils/request';

Vue.filter('parseDate', function(input){
    var date = new Date(input);
    var formatter = 'YYYY-MM-DD HH:mm';
    return formatter.replace('YYYY', date.getFullYear())
                    .replace('MM', date.getMonth())
                    .replace('DD', date.getDate())
                    .replace('HH', date.getHours())
                    .replace('mm', date.getMinutes())
})

export default {
    data () {
        return {
            //提示，修改该行不会触发热更新，因为更新组件会对当前状态和初始状态进行对比。
            msg: 'Hello CNode!',
            topics: []
        }
    },
    attached(){
        Topics.getTopics((responce)=>{
            var responceData = responce.body
            this.$set('topics', responceData.data);
        })
    }
}
</script>

<!-- 添加 scope 属性可以限制这些style的作用域，仅在该组件中生效 -->
<style scoped lang="scss">
h1 {
  color: #42b983;
}
p{
    small{
        color: #999;
    }
}
</style>
