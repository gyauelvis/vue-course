let gitHubProfile = {
    props:{
        userName:{
            type: String,
            required:true,
            
        }
    },
    template:`#github-user-profile-template`,
    data(){
        return{
            imgLink: null,
            yearJoined: null,
            location:null,
            numberOfFriends:null,
            bio: null,
        }
    },
    async created(){
        
        const req = await fetch(`https://api.github.com/users/${this.userName}`)
        const data = await req.json()
        if(req.ok){
            this.imgLink = data.avatar_url
            this.yearJoined = (data.created_at).slice(0,4)
            this.numberOfFriends = data.followers
            this.bio = data.bio
        }
        
    }
}
Vue.createApp({
    data(){
        return{
            
        }
    },

    components:{'github-user-profile':gitHubProfile}

}).mount("#app")