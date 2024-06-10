<template>
    <div class='container'>
        <div class='box titlearea'>
            <button @click='returnBack'>Go back</button>
            <h2>{{meal.strMeal}}</h2>
            <img :src="meal.strMealThumb" id='dishIMG'></img>
            <span v-if='meal.strTags != null && meal.strTags != undefined && meal.strTags != ""'>Tags : {{meal.strTags}}</span>
            <span v-else>Tags : None</span>
        </div>
        <div class='box ingredientarea'>
            <h2>Ingrédient</h2>
            <div class='ingredientlist'>
                <ul class='quantity'>
                    <li v-for='(info, key) in meal' v-if='key.includes("strMeasure") && info != ""'>{{info}}</li>
                </ul>
                <ul>
                    <li v-for='(info, key) in meal' v-if='key.includes("strIngredient") && info != ""' class='ingredients'>{{info}}</li>
                </ul>
            </div>
        </div>
        <div class='box instructionarea'>
            <h2>Instructions</h2>
            <p>{{meal.strInstructions}}</p>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            meal: '',
        },
        methods:{
            returnBack() {
                document.location.href = '../index.html';
            },
        }
    };
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .box {
        margin: 1em;
        padding: 1em;
        background-color: white;
        border: 2px solid lightgrey;
        border-radius: 10px;
        box-shadow: 2px 2px 4px #D5D5D5;
    }
    .ingredientarea h2, .instructionarea h2 {
        font-size: 2em;
    }
    
    /* Title Area */
    .titlearea {
        position: relative;
        width: 40%;
    }
    .titlearea h2 {
        margin-top: 0.2em;
        font-size: 2em;
        text-align: center;
        text-decoration: underline;
    }
    .titlearea span {
        padding: 0.2em 0.4em;
        border: 1px solid #BFBFBF;
        background-color: #D5D5D5;
    }
    .titlearea button {
        position: absolute;
        padding: 0.4em 0.8em;
        background-image: linear-gradient(#E5E5E5, #D2D2D2);
        border-color: #C9C9C9;
        border-radius: 3px;
    }
    .titlearea button:hover {
        background-image: linear-gradient(#D1F3FF, #B7EDFF);
        border-color: #A2E7FF;
        cursor: pointer;
    }
    #dishIMG {
        margin-bottom: 0.5em;
        width: 100%;
        border-radius: 5px;
    }
    
    /* Ingredient Area */
    .ingredientarea {
        width: 40%;
    }
    .ingredientlist {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    .ingredientarea ul {
        margin: 0;
        width: 65%;
        list-style: none;
    }
    .ingredientarea li {
        padding: 0.5em 1em;
        border-left: 3px solid black;
        font-size: 1.1em;
        white-space: nowrap;
    }
    .ingredientarea .ingredients {
        border-left: none;
    }
    .ingredientarea .quantity {
        width: 35%;
    }
    
    /* Instruction Area */
    .instructionarea {
        width: 100%;
    }
    .instructionarea p {
        font-size: 1.1em;
    }
</style>