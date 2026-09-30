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
    guests: 2,
    bed: "King",
    floor: "32F",
    image: "assets/Deluxe.jpeg",
    amenities: ["King Bed", "Bathtub", "Wi-Fi", "City View"],

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
      gallery: [
        {
          image: "assets/Deluxe.jpeg",
          alt: "Panoramic Jakarta skyline from the Deluxe City View room",
        },
        {
          image: "assets/exp-1.jpg",
          alt: "Deluxe room king bed and linens",
        },
        {
          image: "assets/exp-2.jpg",
          alt: "The Grand Hotel indoor pool",
        },
      ],
      ctaTitle: "Meet Jakarta from a different point of view.",
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
    guests: 2,
    bed: "King",
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
      amenities: [
        {
          title: "Separate living area",
          description: "Space to relax or host",
        },
        {
          title: "Private bar",
          description: "Curated drinks and refreshments",
        },
        { title: "Soaking tub", description: "Marble bathroom sanctuary" },
        { title: "Executive lounge", description: "Exclusive daily access" },
      ],
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
    guests: 4,
    bed: "Two King Beds",
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
      amenities: [
        {
          title: "Two private bedrooms",
          description: "Space for up to four guests",
        },
        {
          title: "Private cinema",
          description: "Your personal entertainment room",
        },
        {
          title: "Formal dining room",
          description: "Designed for private occasions",
        },
        {
          title: "Rooftop pool access",
          description: "Exclusive skyline relaxation",
        },
      ],
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

function createRoomCard(room) {
  const roomCard = document.createElement("div");
  roomCard.className = "room-list-card";
  roomCard.innerHTML = `
  <div class="room-list-img">
    <img
      src="${room.image}"
      height="100%"
      width="100%"
      alt="${room.name}"
    />
  </div>
  <div class="room-list-body">
    <div>
      <h3>Deluxe City View Room</h3>
      <p>
        ${room.description}
      </p>
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
        <span class="from">From</span
        ><span class="amount">${room.priceLabel}</span
        ><span class="night"> / night</span>
      </div>
      <button class="btn-gold" onclick="location.href = 'details.html'">
        View Detail
      </button>
    </div>
  </div>
`;
  return roomCard;
}

for (let i = 1; i < rooms.length; i++) {
  const roomsList = document.querySelector("#rooms-list");
  const roomCard = createRoomCard(rooms[i]);
  roomsList.appendChild(roomCard);
}
