import "./homeStyles.css"
import PastaImage from "./images/9453.jpg"

export function homeLoad() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const leftSection = document.createElement('div');
    leftSection.classList.add('left-section');
    const rightSection = document.createElement('div');
    rightSection.classList.add('right-section');


    const heading = document.createElement('h1');
    heading.textContent = 'Best Pasta';

    const tagline = document.createElement('h3');
    tagline.textContent = 'Bringing the World’s Best Pasta to Your Plate!';
    tagline.style.fontStyle = 'italic';

    const intro = document.createElement('p');
    intro.textContent = "At Best Pasta, we believe that great pasta knows no borders! Our restaurant is a celebration of pasta dishes from around the world, bringing together the rich flavors of Italy, the bold spices of Asia, and the comforting classics of America—all on one plate. Whether you're craving a traditional Spaghetti Carbonara, a creamy Japanese Miso Pasta, or a zesty Cajun Chicken Pasta, we’ve got something to satisfy every pasta lover’s craving. Join us for a delicious journey across the globe, one bowl of pasta at a time! 🍝✨";



    leftSection.appendChild(heading);
    leftSection.appendChild(tagline);
    leftSection.appendChild(intro);


    const image = document.createElement('img');
    image.src = PastaImage;

    rightSection.appendChild(image);

    content.appendChild(leftSection);
    content.appendChild(rightSection);
}



