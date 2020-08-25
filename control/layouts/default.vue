<template>

    <div class="h-screen pb-24 relative">

        <main class="flex">

            <Sidebar />

            <div class="w-full bg-black">

                <Nuxt />

            </div>

        </main>

        <footer>

            <Player />

        </footer>

    </div>

</template>

<script>

    import Player from '@/components/Player'
    import Sidebar from '@/components/Sidebar'

    export default {

        components: {

            Player,
            Sidebar

        }
        
    }

</script>
