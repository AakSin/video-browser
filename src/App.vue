<template>
    <div class="container">
        <SearchBar v-on:termChange="onTermChange"></SearchBar>
        <VideoDetail v-if=this.selected v-bind:video="this.selected" />
        <VideoList @videoSelect="onVideoSelect" v-bind:videos="videos"> </VideoList>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail"
const API_KEY = process.env.VUE_APP_YOUTUBE_KEY;
export default {
 name:"App",
 components: {
     SearchBar,
     VideoList,
     VideoDetail
 },
 data(){
     return{
         videos:[],
         selected:null
     }
 },
 methods: { 
     onVideoSelect(video){
         this.selected=video
     },
     
     onTermChange(SearchTerm){
        axios.
        get("https://www.googleapis.com/youtube/v3/search",{
            params:{
                key:API_KEY,
                type:"video",
                part:"snippet",
                q:SearchTerm
            }
        })
        .then(response=>{
            this.videos=response.data.items
        });
 } }   
};
</script>