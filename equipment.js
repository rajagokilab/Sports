const equipmentData = [
    {
        imageSrc: "/sports equipments part 2/footballleghigher.png",
        text: "Foot Ball",
        link: "football.html"
    },
    {
        imageSrc: "/Sports Equipment/Cricketballequip.png",
        text: "Cricket",
        link: "Cricket.html"
    },
    {
        imageSrc: "/sports equipments part 2/golfwomen.png",
        text: "Golf",
        link: "golf.html"
    },
    {
        imageSrc: "Sports Equipment/tenniswomen.png",
        text: "Tennis",
        link: "tennis.html"
    },
    // Add more equipment data with their respective links
];

const equipmentContainer = document.getElementById('equipmentContainer');

equipmentData.forEach(equipment => {
    const equipmentCard = document.createElement('div');
    equipmentCard.classList.add('equipment-card');
    equipmentCard.addEventListener('click', () => {
        window.location.href = equipment.link;
    });

    const image = document.createElement('img');
    image.src = equipment.imageSrc;
    image.alt = equipment.text; // Add alt text for accessibility

    const overlay = document.createElement('div');
    overlay.classList.add('image-text-overlay');
    overlay.textContent = equipment.text;

    equipmentCard.appendChild(image);
    equipmentCard.appendChild(overlay);
    equipmentContainer.appendChild(equipmentCard);
});
// 2nd Equip
const sportequipmentData = [
    {
        imageSrc: "Sports Equipment/badmintoncok.png",
        text: "Badminton",
        link: "Badminton.html"
    },
    {
        imageSrc: "Sports Equipment/0boxcheck.png",
        text: "Boxing",
        link: "Boxing.html"
    },
    {
        imageSrc: "sports equipments part 2/hockeyplay.png",
        text: "Hockey",
        link: "Hockey.html"
    },
    {
        imageSrc: "sports equipments part 2/basketballhighr.png",
        text: "Basket Ball",
        link: "basketball.html"
    },
    // Add more equipment data with their respective links
];
const sportContainer = document.getElementById('sportequipmentContainer');

sportequipmentData.forEach(equipment => {
const sportequipmentCard = document.createElement('div');
sportequipmentCard.classList.add('equipment-card');
sportequipmentCard.addEventListener('click', () => {
window.location.href = equipment.link;
});

const images = document.createElement('img');
images.src = equipment.imageSrc;
images.alt = equipment.text; // Add alt text for accessibility

const overlay = document.createElement('div');
overlay.classList.add('image-text-overlay');
overlay.textContent = equipment.text;

sportequipmentCard.appendChild(images);
sportequipmentCard.appendChild(overlay);
sportequipmentContainer.appendChild(sportequipmentCard);
});
// 3row
const sportsequipmentData = [
    {
        imageSrc: "sports equipments part 2/tabletennismen.png",
        text: "Table Tennis",
        link: "tabletenni.html"
    },
    {
        imageSrc: "sports equipments part 3/sports (34).png",
        text: "Base Ball",
        link: "baseball.html"
    },
    {
        imageSrc: "sports equipments part 2/gymequip.png",
        // text: "Gym",
        link: "gym.html"
    },
    {
        imageSrc: "sports equipments part 2/chesshorse.png",
        text: "Chess",
        link: "chess.html"
    },
    // Add more equipment data with their respective links
];
const sportsContainer = document.getElementById('sportsequipmentContainer');

sportsequipmentData.forEach(equipment => {
const sportsequipmentCard = document.createElement('div');
sportsequipmentCard.classList.add('equipment-card');
sportsequipmentCard.addEventListener('click', () => {
window.location.href = equipment.link;
});

const imagess = document.createElement('img');
imagess.src = equipment.imageSrc;
imagess.alt = equipment.text; // Add alt text for accessibility

const overlay = document.createElement('div');
overlay.classList.add('image-text-overlay');
overlay.textContent = equipment.text;

sportsequipmentCard.appendChild(imagess);
sportsequipmentCard.appendChild(overlay);
sportsequipmentContainer.appendChild(sportsequipmentCard);

});


// footer

// JavaScript for the countdown
function updateCountdown() {
          const targetDate = new Date();
          targetDate.setDate(targetDate.getDate() + 3); // Example: Deal ends in 3 days
          targetDate.setHours(8, 9, 59, 999); // Example: Ends at 08:09:59

          const now = new Date().getTime();
          const difference = targetDate - now;

          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

          document.getElementById('days').innerText = String(days).padStart(2, '0');
          document.getElementById('hours').innerText = String(hours).padStart(2, '0');
          document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');

          if (difference < 0) {
              clearInterval(countdownInterval);
              document.querySelector('.countdown').innerHTML = '<div class="text-danger">Deal Ended!</div>';
              document.getElementById('shopNowBtn').disabled = true;
          }
      }

      const countdownInterval = setInterval(updateCountdown, 1000);