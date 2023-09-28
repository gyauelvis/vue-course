let PlanComponent = {
    template:`#plan-template`,
    props:['name'],
    data(){
        return {
            selected: false
        }
    },
    methods:{
        select(){
            this.selected = true;
            this.$emit('item-selected', this.name)
        }
    }
}

let PlanPicker={
    components:{plan:PlanComponent},
    template:`#plan-picker-template`,
    data(){
        return{
            plans:["The Single","The Addict","The Curios"],
            selectedPlan: null,

        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan;
        }
    }
}

Vue.createApp({
    components:{plan_picker:PlanPicker}
})





.mount("#app")