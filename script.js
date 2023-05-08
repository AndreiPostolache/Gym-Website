function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  const map = L.map("map").setView(
    [position.coords.latitude, position.coords.longitude],
    15
  );

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([position.coords.latitude, position.coords.longitude])
    .addTo(map)
    .bindPopup("Here we are!")
    .openPopup();
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

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slider = document.querySelector('.slider');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  };

  init();

  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};

slider();



