// ===== The Grand Hotel =====

const rooms = [
  {
    id: "deluxe-city-view",
    name: "Deluxe City View",
    type: "Deluxe",
    description:
      "A spacious retreat with panoramic city vistas and refined contemporary interiors.",
    price: 1800000,
    priceLabel: "Rp 1.8 Jt",
    size: 52,
    bed: "King",
    guests: 2,
    floor: "32F",
    image: "assets/Deluxe.jpeg",
    amenities: ["King Bed", "Bathtub", "Wi-Fi", "City View"],

    // =============== Add More Data Below ==================

    detail: {
      title: "Your private view over Jakarta.",
      description:
        "Our Deluxe City View is a 52-square-metre retreat designed around the skyline. Floor-to-ceiling windows fill the room with natural light, while warm timber, soft textiles, and considered details create a calm counterpoint to the city below. Settle into a king bed, unwind in the marble bathroom, and watch Jakarta glow after dark from the comfort of your own sanctuary.",
      amenities: [
        { title: "King-size bed", description: "Premium linens and pillows" },
        {
          title: "Panoramic city view",
          description: "Floor-to-ceiling windows",
        },
        { title: "Marble bathroom", description: "Bathtub and rain shower" },
        { title: "High-speed Wi-Fi", description: "Complimentary access" },
      ],
    },
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    type: "Executive",
    description:
      "A spacious suite with a separate living area, private bar, and exclusive lounge access.",
    price: 3500000,
    priceLabel: "Rp 3.5 Jt",
    size: 90,
    bed: "King",
    guests: 2,
    floor: "38F",
    image: "assets/Executive.jpeg",
    amenities: [
      "Living Area",
      "Private Bar",
      "Soaking Tub",
      "Executive Lounge",
    ],
    detail: {
      title: "More room to settle into the city.",
      description:
        "Designed for guests who appreciate space and privacy, the Executive Suite offers a separate living room, an elegant bedroom, and a private bar for relaxed evenings in. High above Jakarta, the suite creates a calm place to work, entertain, or simply enjoy a slower stay.",
      gallery: [
        {
          image: "assets/Executive.jpeg",
          alt: "Executive Suite living area",
        },
        {
          image: "assets/exp-3.jpg",
          alt: "Executive Suite bedroom",
        },
        {
          image: "assets/exp-4.png",
          alt: "Executive lounge experience",
        },
      ],
      ctaTitle: "Give your Jakarta stay more room to unfold.",
    },
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    type: "Presidential",
    description:
      "A luxurious suite with private entertainment spaces and premium hotel services.",
    price: 8000000,
    priceLabel: "Rp 8 Jt",
    size: 240,
    bed: "Two King",
    guests: 4,
    floor: "42F",
    image: "assets/Presidential.jpeg",
    amenities: [
      "Two Bedrooms",
      "Private Cinema",
      "Dining Room",
      "Rooftop Pool",
    ],
    detail: {
      title: "The city’s most private address.",
      description:
        "The Presidential Suite is an expansive private residence above Jakarta. With two elegant bedrooms, a private cinema, dedicated dining room, and rooftop pool access, every detail is designed for exceptional stays, intimate celebrations, and effortless entertaining.",
      gallery: [
        {
          image: "assets/Presidential.jpeg",
          alt: "Presidential Suite interior",
        },
        {
          image: "assets/exp-5.png",
          alt: "Private dining experience",
        },
        {
          image: "assets/exp-6.png",
          alt: "Rooftop pool overlooking Jakarta",
        },
      ],
      ctaTitle: "Make every moment in Jakarta unforgettable.",
    },
  },
];

// Practice penerapan object pada console
// function showRoomInfo(name, price, size, guests) {
//   console.log("Room: " + name);
//   console.log("Price: " + price + " per night");
//   console.log("Size: " + size + " sqm");
//   console.log("Guests: " + guests);
// }

// function calculateStay(price, nights) {
//   return price * nights;
// }

// rooms.forEach((room) => {
//   showRoomInfo(room.name, room.priceLabel, room.size, room.guests);
//   console.log("");
// });

function createRoomCard(room) {
  const roomCard = document.createElement("div");
  roomCard.className = "room-list-card";
  roomCard.innerHTML = `<div class="room-list-img">
  <img
    src="${room.image}"
    height="100%"
    width="100%"
    alt="${room.name}"
  />
</div>

<div class="room-list-body">
  <div>
    <h3>${room.name}</h3>
    <p>${room.description}</p>

    <div class="room-specs">
      <div class="spec-item">
        <div class="spec-val">${room.size}</div>
        <div class="spec-label">sqm</div>
      </div>
      <div class="spec-item">
        <div class="spec-val">${room.guests}</div>
        <div class="spec-label">Guests</div>
      </div>
      <div class="spec-item">
        <div class="spec-val">${room.floor}</div>
        <div class="spec-label">Floor</div>
      </div>
    </div>
</div>

<div class="room-list-footer">
  <div class="room-price">
    <span class="from">From</span>
    <span class="amount">${room.priceLabel}</span>
    <span class="night"> / night</span>
  </div>
  <a class="btn-gold" data-id=${room.id}>
    View Detail
  </a>
</div>
</div>`;

  return roomCard;
}

const isRoom = document.getElementById("rooms-page");
if (isRoom != null) {
  for (let i = 1; i < rooms.length; i++) {
    const roomsList = document.querySelector("#rooms-list");
    const roomCard = createRoomCard(rooms[i]);
    roomsList.appendChild(roomCard);
  }
}

const buttons = document.querySelectorAll(".btn-gold");
// console.log(buttons); // Comment this code

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const roomId = button.dataset.id;
    sessionStorage.setItem("roomId", roomId);
    window.location.href = "details.html";
  });
});

const isDetail = document.getElementById("details-page");
if (isDetail != null) {
  const roomId = sessionStorage.getItem("roomId");

  rooms.forEach((room) => {
    if (room.id == roomId) {
      // console.log(room);
      // Add Code Below
      document.getElementById("detail-img").src = room.image;
      document.getElementById("room-title").textContent = room.name;
      // Add Code Below
      document.getElementById("overview-title").textContent = room.name;
      document.getElementById("detail-description").textContent =
        room.detail.description;
      // Add Code Below
      document.getElementById("detail-size").textContent = room.size;
      document.getElementById("detail-guests").textContent = room.guests;
      document.getElementById("detail-bed").textContent = room.bed;
      // Add Code Below
      document.getElementById("detail-floor").textContent = room.floor;
      document.getElementById("detail-price-label").textContent =
        room.priceLabel;
      // Add Code Below
      for (let i = 0; i < room.amenities.length; i++) {
        document.getElementsByClassName("detail-amenity")[i].textContent =
          room.amenities[i];
      }
      // Add Code Below
      for (let i = 0; i < room.detail.gallery.length; i++) {
        document.querySelectorAll(".detail-gallery img")[i].src =
          room.detail.gallery[i].image;
        document.querySelectorAll(".detail-gallery img")[i].alt =
          room.detail.gallery[i].alt;
      }
      // Add Code Below
      document.querySelector(".detail-cta h2").textContent =
        room.detail.ctaTitle;
    }
  });
}
