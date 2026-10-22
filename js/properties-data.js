// VISTA® ARCHITECTURAL REVENUE — EXPANDED PROPERTY DATABASE (USA)
const USA_PROPERTIES = {
    "malibu-sunset-villa": {
        id: "malibu-sunset-villa",
        name: "THE SUNSET PACIFIC VILLA",
        title: "The Sunset Pacific Villa | Malibu, CA",
        category: "MALIBU / CALIFORNIA",
        price: 8500000,
        image: "assets/malibu-villa.jpg",
        reference: "VS-001-MAL",
        beds: 5,
        baths: 6,
        sqft: "6,200",
        location: "Malibu, California",
        description: "An architectural masterpiece nestled on the warm sandy bluffs of coastal Malibu. This organic modern residence offers unobstructed 270-degree views of the Pacific Ocean. Crafted with premium materials, the villa features sliding automated glass facades that seamlessly blend indoor and outdoor spaces. Amenities include a custom wellness center, a private wine vault, a rimless solar-heated infinity eco-pool, and private key-gate security access directly to the isolated beach below. Built utilizing cutting-edge sustainable geothermal climate engineering."
    },
    "miami-penthouse": {
        id: "miami-penthouse",
        name: "BRICKELL SKY PENTHOUSE",
        title: "Brickell Sky Penthouse | Miami, FL",
        category: "BRICKELL / FLORIDA",
        price: 4200000,
        image: "assets/miami-penthouse.jpg",
        reference: "VS-002-MIA",
        beds: 3,
        baths: 4,
        sqft: "3,800",
        location: "Miami, Florida",
        description: "A breathtaking high-altitude double-story duplex penthouse towering over the premium golden Brickell coastline. This soaring urban residence features dramatic 20-foot floor-to-ceiling smart glass walls, providing panoramic views of Biscayne Bay and the Miami skyline. The property boasts custom Italian millwork, integrated professional Wolf-SubZero appliances, and private elevator access. The highlight is an expansive wrapping rooftop terrace complete with an outdoor summer kitchen, private custom cocktail bar, and an elevated glass-walled plunge pool."
    },
    "la-modern-estate": {
        id: "la-modern-estate",
        name: "BEL AIR MINIMALIST ESTATE",
        title: "Bel Air Minimalist Estate | Los Angeles, CA",
        category: "BEL AIR / LOS ANGELES",
        price: 12900000,
        image: "assets/la-estate.jpg",
        reference: "VS-003-LA",
        beds: 7,
        baths: 9,
        sqft: "10,400",
        location: "Los Angeles, California",
        description: "An ultra-private fortified compound built from monumental architectural concrete and low-iron structural glass, located within the most exclusive gated enclave of Bel Air. This sprawling minimalist estate is an absolute oasis of premium isolation. It includes a multi-level state-of-the-art home cinema, a professional-grade indoor fitness gym, a custom underground car gallery for 6 vehicles, a hidden panic suite, and an advanced automated air-purification system. Outside, the flat manicured resort lawns are accompanied by a wrapping zero-edge pool and an open-air fire pit lounge."
    },
    "ny-luxury-loft": {
        id: "ny-luxury-loft",
        name: "SOHO ARCHITECTURAL LOFT",
        title: "Soho Architectural Loft | New York, NY",
        category: "SOHO / NEW YORK",
        price: 5600000,
        image: "assets/ny-loft.jpg",
        reference: "VS-004-NY",
        beds: 2,
        baths: 2.5,
        sqft: "2,900",
        location: "New York, New York",
        description: "A monumental gallery-style penthouse conversion occupying a historic cast-iron building in the heart of Soho. This premium loft beautifully integrates raw historical elements, such as exposed red brick walls and original sandblasted structural pine timber beams, with world-class modern museum-grade steel finishes. Features include a professional sound-isolated creative studio room, smart Lutron gallery architectural track lighting, custom stone monolithic vanities, and a private biometric elevator that opens directly into the private entry foyer of the residence."
    }
};

function formatCurrency(value) {
    return `$ ${Number(value).toLocaleString("en-US", { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
    })}`;
}


function updateSavedCount() {
    const countElement = document.querySelector("#savedCount");
    if (!countElement) return;
    try {
        const saved = JSON.parse(localStorage.getItem("estate-saved")) || [];
        countElement.textContent = ` (${saved.length})`;
    } catch {
        countElement.textContent = " (0)";
    }
}
document.addEventListener("DOMContentLoaded", updateSavedCount);
window.addEventListener("storage", updateSavedCount);
