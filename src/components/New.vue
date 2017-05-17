<template>
<div class="new">
    <input type="number" v-model="id" placeholder="Post Id"><br>
    <input type="text" v-model="title" placeholder="Title"><br>
    <textarea rows="4" cols="50" v-model="body" placeholder="Tell your story..."></textarea>
    <button @click="createEntries">Create Entry</button>
    <router-link to="/">Back to Blog</router-link>
</div>
</template>

<script>
    import { store } from '../store/blog-store'

export default {
  name: 'new',
  data () {
    return {
      entries: store.methods.getEntries(),
      title: '',
      body: '',
      id: ''
    }
  },
  methods: {
      createEntries() {
          store.methods.createEntries({id: this.id, title: this.title, body: this.body})
      }
  }
}
</script>

<style>

</style>