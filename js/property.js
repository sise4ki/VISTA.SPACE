// AFTERHOURS REAL ESTATE — PROPERTY CORE AGENT (STRICT IMAGE FIX)

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("house");
    const house = USA_PROPERTIES[requested] || USA_PROPERTIES["malibu-sunset-villa"];

    document.title = house.title;
    if(document.querySelector("#detailNumber")) document.querySelector("#detailNumber").textContent = house.reference;
    if(document.querySelector("#detailCategory")) document.querySelector("#detailCategory").textContent = house.category;
    if(document.querySelector("#detailName")) document.querySelector("#detailName").textContent = house.name;
    if(document.querySelector("#detailPrice")) document.querySelector("#detailPrice").textContent = formatCurrency(house.price);
    if(document.querySelector("#detailDescription")) document.querySelector("#detailDescription").textContent = house.description;
    if(document.querySelector("#detailLocation")) document.querySelector("#detailLocation").textContent = house.location;
    if(document.querySelector("#detailReference")) document.querySelector("#detailReference").textContent = house.reference;

    if(document.querySelector("#specBeds")) document.querySelector("#specBeds").textContent = `${house.beds} Beds`;
    if(document.querySelector("#specBaths")) document.querySelector("#specBaths").textContent = `${house.baths} Baths`;
    if(document.querySelector("#specSqft")) document.querySelector("#specSqft").textContent = `${house.sqft} Sq Ft`;

    // ЖЁСТКИЙ ФИКС КАРТИНКИ
    const imgElement = document.querySelector("#detailImage");
    if (imgElement && house.image) {
        // Устанавливаем путь к картинке
        imgElement.src = house.image;
        imgElement.alt = house.name;
        
        // Принудительно убираем скрытие, если оно сработало ошибочно
        imgElement.style.display = "block";
        imgElement.style.width = "100%";
        imgElement.style.height = "100%";
        imgElement.style.objectFit = "cover";
    }

    const bookBtn = document.querySelector("#bookTourBtn");
    if (bookBtn) {
        bookBtn.addEventListener("click", () => {
            localStorage.setItem("estate-last-viewed", JSON.stringify(house));
            const msg = document.querySelector("#tourMessage");
            if (msg) msg.textContent = "Connecting with security desk...";
            setTimeout(() => window.location.href = "book.html", 400);
        });
    }
});
