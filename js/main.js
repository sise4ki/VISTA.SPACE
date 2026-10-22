// VISTA® — LIVE MAP SPATIAL ENGINE (GITHUB PRODUCTION)

window.addEventListener("DOMContentLoaded", () => {
    // Мгновенно удаляем лоадер заставки
    const loader = document.querySelector(".site-loader");
    if (loader) loader.remove();

    // Ждем долю секунды, чтобы холст успел построиться, и включаем живую карту
    setTimeout(() => {
        const mapContainer = document.querySelector('#map');
        if (!mapContainer) return;

        // Создаем карту. Координаты [37.8, -96] — это центр США. Зум 4 — идеальный охват.
        const map = L.map('map', {
            zoomControl: true, // Включает встроенные рабочие кнопки + и -
            minZoom: 2,
            maxZoom: 14
        }).setView([37.8, -96], 4);

        // Подкачиваем из сети стильную светлую хай-тек подложку без лишней каши
        L.tileLayer('https://{s}://{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Реальные географические координаты наших вилл (Широта и Долгота)
        const realEstateMarkers = [
            {
                coords: [34.0259, -118.7798], // Малибу
                name: "THE SUNSET PACIFIC VILLA",
                price: "\$8,500,000",
                locText: "MALIBU, CA",
                link: "property.html?house=malibu-sunset-villa",
                img: "assets/malibu-villa.jpg"
            },
            {
                coords: [34.0837, -118.4466], // Бель-Эйр
                name: "BEL AIR MINIMALIST ESTATE",
                price: "\$12,900,000",
                locText: "LOS ANGELES, CA",
                link: "property.html?house=la-modern-estate",
                img: "assets/la-estate.jpg"
            },
            {
                coords: [25.7617, -80.1918], // Майами
                name: "BRICKELL SKY PENTHOUSE",
                price: "\$4,200,000",
                locText: "MIAMI, FL",
                link: "property.html?house=miami-penthouse",
                img: "assets/miami-penthouse.jpg"
            },
            {
                coords: [40.7233, -74.0030], // Сохо, Нью-Йорк
                name: "SOHO ARCHITECTURAL LOFT",
                price: "\$5,600,000",
                locText: "NEW YORK, NY",
                link: "property.html?house=ny-luxury-loft",
                img: "assets/ny-loft.jpg"
            }
        ];

        // Кастомизируем маркер под наш оливковый стиль с неоновым пульсом
        const customIcon = L.divIcon({
            className: 'custom-map-marker',
            html: '<div class="pin-pulse"></div><div class="pin-dot"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        // Расставляем рабочие маркеры
        realEstateMarkers.forEach(data => {
            // Верстка вылетающего окна при клике на точку
            const popupContent = `
                <div class="map-popup-card">
                    <img src="${data.img}" alt="${data.name}" style="width:100%; height:110px; object-fit:cover; display:block;">
                    <div class="popup-meta" style="margin-top:8px;">
                        <h4 style="font-size:11px; font-weight:700; text-transform:uppercase; margin:0; color:#111;">${data.name}</h4>
                        <span style="font-size:9px; color:#384a37; font-weight:600; display:block; margin:3px 0 6px;">${data.price} // ${data.locText}</span>
                        <a href="${data.link}" style="display:block; font-size:9px; font-weight:700; text-decoration:none; color:#111; border-top:1px solid #eee; padding-top:5px; letter-spacing:0.5px;">VIEW SPECIFICATION →</a>
                    </div>
                </div>
            `;

            L.marker(data.coords, { icon: customIcon })
                .addTo(map)
                .bindPopup(popupContent, {
                    maxWidth: 240,
                    className: 'vista-custom-popup'
                });
        });

        // Фикс, чтобы карта сразу правильно пересчитала размеры окна
        setTimeout(() => { map.invalidateSize(); }, 200);

    }, 200);
});
