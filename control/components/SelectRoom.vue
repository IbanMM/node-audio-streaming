<template>

    <div class="relative">
        
        <span
            class="text-white"
            @mouseenter="showSelect()"
            @mouseleave="timeoutSelect()"
        >icon</span>

        <div
            class="absolute bg-white right-0 bottom-0 mb-8 rounded"
            :class="visible ? 'block':'hidden'"
            @mouseenter="showSelect()"
            @mouseleave="timeoutSelect()"
        >

            <ul>

                <li v-for="(client,index) in getClients" :key="index"
                    class="bg-white p-4 rounded"
                >
                    
                    <button>{{client.name}}</button>
                    
                </li>


            </ul>

        </div>

    </div>

</template>

<script>

    import { mapGetters } from 'vuex'

    export default {

        data() {

            return {

                visible: false,
                hover: false

            }

        },

        computed: {

            ...mapGetters('clients', ['getClients']),

        },

        methods: {

            showSelect() {

                this.visible = true
                this.hover = true

            },

            timeoutSelect() {

                this.hover = false

                setTimeout(()=>{
                    
                    if( this.hover == false ) this.visible = false

                }, 500)

            }

        }
        
    }

</script>