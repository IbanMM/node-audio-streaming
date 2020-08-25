<template>

    <div class="w-full bg-black h-24 absolute left-0 bottom-0 px-4 border-t-2 border-green-800 flex justify-between items-center">

        <div>1</div>

        <div>

            <button>
                
                <svg-icon class="h-4 w-4" name="audio_play" />
                
            </button>

        </div>

        <div>

            <select name="" id="">

                <option v-for="(client,index) in getClients" :key="index" :value="client.socket">{{ client.name }}</option>

            </select>

        </div>
          
    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {
        
        computed: {

            ...mapGetters('clients', ['getClients'])

        }

    }

</script>

<style lang="postcss" scoped>

</style>