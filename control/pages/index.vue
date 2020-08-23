<template>
  <div class="container mx-auto">
    <p>bum bum</p>
  </div>
</template>

<script>

    export default {

        mounted() {

            console.log( this.$socket )

            this.$socket.emit('bumbum', 'desdecontrolert')

        }

    }

</script>

