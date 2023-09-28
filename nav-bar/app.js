Vue.createApp({
    data(){
        return{
            isMenuOpen:false,
            isMoreFeatureOpen:false,
            explore_features_button: "Explore More Features",
            items:[
                {id:1,label:"Home"},
                {id:2,label:"Features"},
                {id:3,label:"Resources"},
                {id:4,label:"Customers"},
                {id:5,label:"Help"}
            ]
        }
    },
    methods:{
        toggleMenu(){
            this.isMenuOpen = !this.isMenuOpen;
            if(this.isMenuOpen == true){
                document.querySelector(".menu").style.height = "20rem";
                document.querySelectorAll(".menu a").forEach((element)=>element.style.visibility = "visible");
                document.querySelectorAll(".menu a").forEach((element)=>element.style.opacity = "1");
            }else{
                document.querySelector(".menu").style.height = "0";
                document.querySelectorAll(".menu a").forEach((element)=>element.style.visibility = "hidden");
                document.querySelectorAll(".menu a").forEach((element)=>element.style.opacity = "0");
            }

        },
        exploreFeatures(){
            
            if(this.explore_features_button =="Explore More Features"){
                document.querySelector(".more-features-box").style.display = "grid";
                document.querySelector(".more-features-box").style.opacity = "1";
                document.querySelector(".more-features-box").style.visibility = "visible";
                this.explore_features_button = "Less Features";
            }else{
                document.querySelector(".more-features-box").style.display = "none";
                document.querySelector(".more-features-box").style.opacity = "0";
                document.querySelector(".more-features-box").style.visibility = "hidden"
                this.explore_features_button = "Explore More Features";
            }
            
            
        }
    }
})

.mount("#app")