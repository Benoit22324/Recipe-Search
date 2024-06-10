/**************************
******** Variables ********
**************************/
let searchName;
let searchBTN;
let searchresult;
let randomDish;

/* DOM Loader */
addEventListener('DOMContentLoaded', ()=>{
    searchBTN = document.getElementById('searchBTN');
    searchresult = document.getElementById('searchresult');
    randomDish = document.getElementById('randomDish');
    
    // Search Dish
    searchBTN.addEventListener('click', ()=>{
        searchName = document.getElementById('searchName').value;
        if (searchName != '' && searchName != null && searchName != undefined) {
            searchresult.innerHTML = '';
            search(searchName, searchresult);
        }
    });
    
    // Generate Random Dish
    randomDish.addEventListener('click', ()=>{
        searchresult.innerHTML = '';
        for (let i=0; i<4; i++) {
            random(searchresult);
        }
    });
    
    // More About Section
    document.addEventListener('click', (e)=>{
        if (e.target.closest('.moreAbout')) {
            let mealId = e.target.closest('.moreAbout').getAttribute('data-name');
            localStorage.setItem('MealID', mealId);
            document.location.href = './More_About/moreAbout.html';
        }
    });
    
    // Generate Random Dish at Launch
    for (let i=0; i<4; i++) {
        random(searchresult);
    }
});

/*************************
******** Function ********
*************************/
async function search(what, where) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${what}`);
    let data = await response.json();
    for (let meal of data.meals) {
        where.innerHTML += `<div class='cards'>
                                <h2>${meal.strMeal}</h2>
                                <img src='${meal.strMealThumb}'/>
                                <p>Origin : ${meal.strArea}<br>Category : ${meal.strCategory}</p>
                                <button data-name="${meal.idMeal}" class='moreAbout'>More About</button>
                            </div>`;
    }
}

async function random(where) {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    let data = await response.json();
    for (let meal of data.meals) {
        where.innerHTML += `<div class='cards'>
                                <h2>${meal.strMeal}</h2>
                                <img src='${meal.strMealThumb}'/>
                                <p>Origin : ${meal.strArea}<br>Category : ${meal.strCategory}</p>
                                <button data-name="${meal.idMeal}" class='moreAbout'>More About</button>
                            </div>`;
    }
}