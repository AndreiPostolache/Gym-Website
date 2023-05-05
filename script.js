


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {

  const map = L.map("map").setView([position.coords.latitude, position.coords.longitude], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([position.coords.latitude, position.coords.longitude]).addTo(map).bindPopup("Here we are!").openPopup();
}


getLocation();





// const allExercices = async function () {
//   const url = "https://exercisedb.p.rapidapi.com/exercises";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "e06e57cf76msh424f6b75f530eadp1dd9a4jsn5efa8229c5f2",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     const { exercises } = result;
//     console.log();

//     const [...alldata] = [...result.values()];
//     console.log(alldata);
//     const allEquipment = alldata.map((el) => el);

//     const bodyWeight = allEquipment.filter((equip, i) =>  equip.bodyPart === 'waist' && equip.equipment === 'body weight');

//     console.log(bodyWeight);
//   } catch (error) {
//     console.error(error);
//   }
// };

// allExercices();





