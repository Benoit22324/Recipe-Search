new Vue({
    el: '#JVue',
    components: {'ViewMore': httpVueLoader('./ViewMoreAbout.vue')},
    data: {
        mealId: localStorage.getItem('MealID'),
        meal: [],
    },
    methods:{
       async findmeal(){
            let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.mealId}`);
            let data = await response.json();
            this.meal = data.meals[0];
            console.log(this.meal)
        }  
    },
     beforeMount() {
         this.findmeal();
    }
})