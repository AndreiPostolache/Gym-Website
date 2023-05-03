const allExercices = async function () {
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e06e57cf76msh424f6b75f530eadp1dd9a4jsn5efa8229c5f2",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const { exercises } = result;
    console.log();

    const [...alldata] = [...result.values()];
    console.log(alldata);
    const allEquipment = alldata.map((el) => el);

    const bodyWeight = allEquipment.filter((equip, i) =>  equip.bodyPart === 'waist' && equip.equipment === 'body weight');
    
    
    
    
    console.log(bodyWeight);
  } catch (error) {
    console.error(error);
  }
};

allExercices();
