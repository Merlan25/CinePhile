<template>
    <div class="single__wrapper" v-if="current">
        <img :src="imgUrlFull+current.backdrop_path" alt="" class="single__bg">
        <div class="single__content">
            <div class="single__left">
                <h2 class="single__title">{{ current.title || current.name }}</h2>
                <p class="single__desc text-limit">{{ current.overview }}</p>
                <p class="single__about">
                    <span>
                        {{ new Date(current.release_date || current.first_air_date).getFullYear() }}, 
                        {{ current.genres.map((val)=> val.name).join(', ') }}
                    </span>
                    <span v-if="current.runtime">
                        {{ new Date(0, 0, 0, 0, current.runtime).getHours()}}h 
                        {{ new Date(0, 0, 0, 0, current.runtime).getMinutes()}}m
                    </span>
                </p>
                <Trailer/>
            </div> 
            <div class="single__right">
                <img :src="imgUrl + current.poster_path" alt="" class="single__img">
            </div>
            <div class="single__block">
                <h3 class="single__subtitle">В главных ролях</h3>
                <div class="single__actors">
                    <Actors :type="type" :id="current.id" count="6"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['type','current']);
import {imgUrlFull,imgUrl} from "../../static.js";
console.log(props.current);
</script>

<style lang="scss">

</style>