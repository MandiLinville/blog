<template>
<div class="post">
    <h2>{{entry.title}}</h2>
    <p>{{entry.body}}</p>
    <router-link to="/">Back to Blog</router-link>
</div>
</template>

<script>
import { store } from '../store/blog-store'

export default {
    name: 'post',
    data() {
        return {
            entry: {},
        }
    },
    mounted: function() {
        this.entry = store.methods.getEntriesById(this.$route.params.id) 
    }
}
</script>

<style>

</style>