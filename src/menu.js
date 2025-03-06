import "./menuStyles.css"
import DishImage from './images/dish.png'


export function menuLoad() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const container = document.createElement('div');
    container.classList.add('menu-container');


    for(let i=0; i<6; i++){
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const info = document.createElement('div');
        info.classList.add('dish-info');

        const dishName = document.createElement('h2');
        dishName.textContent = `Pasta Dish ${i}`;

        const ingredients = document.createElement('p');
        ingredients.textContent = 'A fusion of bold Cajun flavors and creamy goodness! Juicy grilled chicken is served over penne pasta, tossed in a spicy, creamy Cajun Alfredo sauce, and garnished with bell peppers and Parmesan cheese.';

        const price = document.createElement('h2');
        price.textContent = '$19.99';

        const dishImage = document.createElement('div');
        dishImage.classList.add('dish-image');
        
        const image = document.createElement('img');
        image.src = DishImage;

        dishImage.appendChild(image);


        info.appendChild(dishName);
        info.appendChild(ingredients);
        info.appendChild(price);

        item.append(dishImage);
        item.appendChild(info);

        container.appendChild(item);
    }

    content.appendChild(container);
}