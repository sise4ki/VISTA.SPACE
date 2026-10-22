// VISTA® ARCHITECTURAL REVENUE — ACQUISITION PROCESSING

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#checkoutForm");
    const container = document.querySelector("#checkoutItems");
    const totalEl = document.querySelector("#checkoutTotal");
    const success = document.querySelector("#orderSuccess");

    let selectedHouse = null;
    try {
        selectedHouse = JSON.parse(localStorage.getItem("estate-last-viewed"));
    } catch { selectedHouse = null; }

    // Если прямого клика по кнопке не было, берем первую виллу по умолчанию
    if (!selectedHouse) selectedHouse = USA_PROPERTIES["malibu-sunset-villa"];

    // Выводим роскошные спеки дома в правый блок чекаута
    if (container && selectedHouse) {
        container.innerHTML = `
            <div class="checkout-item" style="display:flex; gap:20px; align-items:center; padding:15px 0; border-bottom:1px solid #ded3c4;">
                <div style="width:90px; height:75px; background:#f0eae1; border: 1px solid #e1d9cd; overflow:hidden; flex-shrink:0;">
                    <img src="${selectedHouse.image}" alt="${selectedHouse.name}" style="width:100%; height:100%; object-fit:cover; display:block;">
                </div>
                <div>
                    <p class="checkout-item-name" style="font-family:var(--font-body); font-size:13px; font-weight:700; color:var(--text-tech); text-transform:uppercase; margin:0;">${selectedHouse.name}</p>
                    <p class="checkout-item-meta" style="font-family:var(--font-mono); font-size:10px; color:var(--muted-tan); margin-top:6px; text-transform:uppercase;">${selectedHouse.location}</p>
                    <p class="checkout-item-meta" style="font-family:var(--font-mono); font-size:9px; color:var(--brand-olive); margin-top:2px;">${selectedHouse.beds} BEDS · ${selectedHouse.baths} BATHS · ${selectedHouse.sqft} SQ FT</p>
                </div>
            </div>`;
            
        if (totalEl) totalEl.textContent = formatCurrency(selectedHouse.price);
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = form.querySelector('[type="submit"]');
            if (btn) {
                btn.disabled = true;
                btn.textContent = "DISPATCHING ACQUISITION ENCRYPT...";
            }

            // Генерируем уникальный премиальный код заявки
            const ref = "VS-" + Date.now().toString().slice(-6);
            const refElement = document.querySelector("#orderReference");
            if (refElement) refElement.textContent = ref;

            // Скрываем форму и сводку, открываем экран "Успешно"
            form.hidden = true;
            const summaryBox = document.querySelector(".checkout-summary");
            const headingBox = document.querySelector(".checkout-heading");
            if (summaryBox) summaryBox.hidden = true;
            if (headingBox) headingBox.hidden = true;
            if (success) success.hidden = false;
        });
    }
});
