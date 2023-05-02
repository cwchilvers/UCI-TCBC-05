// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 👍
$(window).on('load', function() {
  // Save user input locally
  for (let i = 0; i < 9; i++) {
    let saveButton = document.getElementsByClassName("btn saveBtn col-2 col-md-1")[i];
    saveButton.addEventListener("click", function() {
      localStorage.setItem(saveButton.parentElement.id, saveButton.parentElement.children[1].value);
  });}

  // Changes colors of rows based on time of day
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

  // ❌ TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Displays current date at top of page
  let today = dayjs();

  $('#currentDay').text(today.format('MMM D, YYYY'));
});