<template>
    <section class="single">
        <SingleContent :current="getInfoId" :type="type"/>
        <Additional/>
        <Recommend/>
    </section>
</template>

<script setup>
import SingleContent from './SingleContent.vue'
import Additional from './Additional.vue'
import Recommend from './Recommend.vue'
const props = defineProps(['type'])
import { useRouter, useRoute } from 'vue-router';
import { computed , onBeforeUnmount } from "vue";
import { useDetails } from "../../store/details";
const detailsStore = useDetails();
const route = useRoute();
const routeId = computed(()=>route.params.id);
detailsStore.getDetails(routeId.value, props.type);
const getInfoId = computed(()=>props.type == 'movie'? detailsStore.movieInfo: detailsStore.tvInfo)
onBeforeUnmount(()=>{
    detailsStore.movieInfo = null
    detailsStore.tvInfo = null
})

</script>

<style lang="scss">

</style>