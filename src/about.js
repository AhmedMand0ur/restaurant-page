import "./aboutStyles.css";

export function aboutLoad() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const column = document.createElement("div");
    column.classList.add("column");

    // Our Story Section
    const about = document.createElement("div");
    about.classList.add("about-section");

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Our Story";

    const aboutPara = document.createElement("p");
    aboutPara.textContent =
        "At Best Pasta, we believe that every bowl of pasta tells a story. A story of tradition, passion, and the love for great food. Our journey began with a simple yet bold idea—to bring the world’s most flavorful pasta dishes together under one roof. From the heart of Italy to the vibrant streets of Thailand, from the cozy kitchens of Japan to the bustling diners of America, pasta has taken on countless forms and flavors. Inspired by this global love for pasta, we set out to create a menu that celebrates these diverse traditions while adding our own special touch. Each dish at Best Pasta is crafted with fresh ingredients, authentic recipes, and a whole lot of love. Whether you’re craving the rich and creamy comfort of an Italian Carbonara, the bold and spicy kick of a Cajun Chicken Pasta, or the umami-packed delight of a Japanese Miso Pasta, we’ve got something special for every pasta lover. So come, take a seat, and let us take you on a delicious journey across the world—one pasta dish at a time.";

    about.appendChild(aboutTitle);
    about.appendChild(aboutPara);

    // Working Hours Section
    const workingHoursSection = document.createElement("div");
    workingHoursSection.classList.add("working-hours-section");

    const workingHoursTitle = document.createElement("h1");
    workingHoursTitle.textContent = "Working Hours";

    const workingHoursList = [
        "Monday – Friday: 11:00 AM – 10:00 PM",
        "Saturday – Sunday: 10:00 AM – 11:00 PM"
    ];

    workingHoursSection.appendChild(workingHoursTitle);

    // Loop through working hours array to generate paragraphs dynamically
    workingHoursList.forEach((time) => {
        const para = document.createElement("p");
        para.textContent = time;
        workingHoursSection.appendChild(para);
    });

    const extraInfo = [
        "Whether it’s a cozy lunch, a family dinner, or a late-night pasta craving, we’re here to welcome you with a warm plate of deliciousness!",
        "📍 Visit us or order online to enjoy your favorite pasta dishes anytime."
    ];

    extraInfo.forEach((text) => {
        const para = document.createElement("p");
        para.textContent = text;
        workingHoursSection.appendChild(para);
    });

    // Append everything to the main container
    column.appendChild(about);
    column.appendChild(workingHoursSection);
    content.appendChild(column);
}
