Vue.createApp({})

.component('notification-message',{
    template:`#notification-message-template`,
    props:{
        className:{
            type:String,
            required:true,
        },
        header:{
            type:String,
            required:true,
        }
    },
    data(){
        return{
            shown:true
        }
    },
    methods:{
        hide(){
            this.shown = false;
        }
    }
})

.mount("#app")