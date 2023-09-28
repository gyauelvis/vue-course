    Vue.createApp({

    })
    
    .component('click-counter',{
        template:`#click-counter-template`,
        data(){
            return{
                counter:0
            }
            
        }

    })
    
    .mount("#app")