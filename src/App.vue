<template>
    <div class="container">
        <SearchBar v-on:termChange="onTermChange"></SearchBar>
        <VideoList v-bind:videos="videos"> </VideoList>
        
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyAJqv7VTUVNeTrwGBS4BVY-yaB_NrLb6Jg";
export default {
 name:"App",
 components: {
     SearchBar,
     VideoList
 },
 data(){
     return{videos:[]};
 },
 methods: { onTermChange(SearchTerm){
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