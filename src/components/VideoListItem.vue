<template>
    <li class="list-group-item media" v-on:click="onVideoSelect">
        <img v-bind:src="thumbnailUrl" alt="" class="mr-3"/>
        <div class="media-body">
            {{video.snippet.title}}
        </div>
    </li>
</template>

<script>
export default {
    name:"VideoListItem",
    props: ["video"],
    computed: {
        thumbnailUrl(){
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect(){
            this.$emit("videoSelect",this.video)
        }
    }
}
</script>
<style scoped>
    li{
        display:flex;
        align-items: center;
        cursor:pointer;
    }
    li:hover{
        background-color: #eee;
    }

</style>