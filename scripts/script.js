$("#btnGetAnimal").on("click", function() {
  // Get username
  let bakerName = $("#bakerName").val();

  // Generate a random spirit animal
  let randomAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];

  // Update the greeting area with both the greeting and the spirit animal
  $("#greetingArea").text("Hi there, " + bakerName + ". Your spirit animal is: " + randomAnimal);
});

// List of spirit animals
let spiritAnimals = ["🐈", "🦆", "👾"];
