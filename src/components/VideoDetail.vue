<template>
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" width="560" height="315" v-bind:src="createURL()" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>
<script>
export default {
    name:"VideoDetail",
    props:["video"],
    methods: {
        createURL(){
            const {videoId}=this.video.id
            return `https://www.youtube.com/embed/${videoId}`
        }
    }
}
</script>
<style scoped>
    div{
        border: 1px solid #ddd;
    }
</style>