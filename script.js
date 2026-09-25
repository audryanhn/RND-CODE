const rooms = [
  {
    id: 0,
    name: "Deluxe City View",
    type: "Deluxe",

    description:
      "A spacious retreat with panoramic city vistas and refined contemporary interiors.",

    price: 1800000,
    priceLabel: "Rp 1.8 Jt",

    size: 52,
    guests: 2,
    floor: "32F",

    image: "assets/Deluxe.jpeg",

    amenities: ["King Bed", "Bathtub", "Wi-Fi", "City View"],
  },
  {
    id: 1,

    name: "Executive Suite",
    type: "Executive",

    description:
      "A spacious suite with a separate living area, private bar, and exclusive lounge access.",

    price: 3500000,
    priceLabel: "Rp 3.5 Jt",

    size: 90,
    guests: 2,
    floor: "38F",

    image: "assets/Executive.jpeg",

    amenities: [
      "Living Area",
      "Private Bar",
      "Soaking Tub",
      "Executive Lounge",
    ],
  },
  {
    id: 2,

    name: "Presidential Suite",
    type: "Presidential",

    description:
      "A luxurious suite with private entertainment spaces and premium hotel services.",

    price: 8000000,
    priceLabel: "Rp 8 Jt",

    size: 240,
    guests: 4,
    floor: "42F",

    image: "assets/Presidential.jpeg",

    amenities: [
      "Two Bedrooms",
      "Private Cinema",
      "Dining Room",
      "Rooftop Pool",
    ],
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
      <h3>${room.name}</h3>
     
      
    </div>
    <div class="room-list-footer">
      
      <a class="btn-gold" data-id="${room.id}" >
        View Detail
      </a>
    </div>
  </div>
`;
  return roomCard;
}

// CEK APAKAH DI PAGE ROOM
const isRoom = document.getElementById("page-rooms");
if (isRoom) {
  for (let i = 1; i < rooms.length; i++) {
    const roomsList = document.querySelector("#rooms-list");
    const roomCard = createRoomCard(rooms[i]);
    roomsList.appendChild(roomCard);
  }
}

// EVENT LISTENER BUTTON
const buttons = document.querySelectorAll(".btn-gold");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let roomId = button.dataset.id;
    console.log(roomId);
    sessionStorage.setItem("room-data", roomId);
    window.location.href = "details.html";
  });
});

const isDetail = document.getElementById("page-details");

if (isDetail) {
  const roomData = sessionStorage.getItem("room-data");
  const room = rooms[roomData];

  console.log(room);

  document.getElementById("detail-img").src = room.image;
  document.getElementById("room-title").textContent = room.name;
  document.getElementById("overview-title").textContent = room.name;
  document.getElementById("detail-description").textContent = room.description;
  document.getElementById("detail-size").textContent = room.size;
  document.getElementById("detail-guest").textContent = room.guests;
  document.getElementById("detail-floor").textContent = room.floor;

  for (let i = 0; i < room.amenities.length; i++) {
    document.getElementsByClassName("detail-amenity")[i].textContent =
      room.amenities[i];
  }
}
