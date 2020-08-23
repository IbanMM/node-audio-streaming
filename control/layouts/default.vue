<template>

    <div class="h-screen pb-24 relative">

        <Nuxt />

        <Player/>

    </div>

</template>

<script>

    import Player from '@/components/Player'

    export default {

        components: {

            Player

        }
        
    }

</script>
