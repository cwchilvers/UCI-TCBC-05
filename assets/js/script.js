$(window).on('load', function() {
  // Save user input locally
  for (let i = 0; i < 9; i++) {
    let saveButton = document.getElementsByClassName("btn saveBtn col-2 col-md-1")[i];
    saveButton.addEventListener("click", function() {
      localStorage.setItem(saveButton.parentElement.id, saveButton.parentElement.children[1].value);
      $('#message').text("Appointment added to local storage ✔️");
  });}

  // Change colors of rows based on time of day
  let currentHour = dayjs().hour();
  const container = document.getElementById("container");

  for (let i = 0; i < 9; i++) {
    let hour = container.children[i].id.split('-')[1];
    if (parseInt(hour) === currentHour) {
      container.children[i].classList = 'row time-block present';
    } else if (parseInt(hour) > currentHour) {
      container.children[i].classList = 'row time-block future';
    }
  }

  // Update each row with user's saved data
  for (let i = 0; i < 9; i++) {
    container.children[i].children[1].value = localStorage.getItem("hour-" + String(i+9));
  }

  // Displays current date at top of page
  let today = dayjs();

  $('#currentDay').text(today.format('MMM D, YYYY'));
});