<template>
  <div class="blog">
    <h1>Blog</h1>
    <div v-for="entry in entries">
    <h2><router-link :to="{name: 'Post', params: {id: entry.id}}">{{entry.title}}</router-link></h2>
    </div>
    <router-link to="/new">Create Post</router-link>
  </div>
</template>

<script>
import { store } from '../store/blog-store'

export default {
  name: 'blog',
  data () {
    return {
      entries: store.methods.getEntries(),
      title: '',
      body: '',
      id:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
