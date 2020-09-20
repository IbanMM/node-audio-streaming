<template>

    <div class="container mx-auto">

        <AlbumListThumbnail />

    </div>

</template>

<script>

    import AlbumListThumbnail from '@/components/AlbumListThumbnail'

    export default {

        components: {

            AlbumListThumbnail

        },

        mounted() {

            console.log( this.$socket )

            this.$socket.emit('bumbum', 'desdecontrolert')

        }

    }

</script>

