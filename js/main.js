// const PageButton = document.querySelectorAll('.PageButton')

// PageButton.forEach(button => {
//   button.addEventListener('click', function() {
//     // remove active class for all button
//     PageButton.forEach(btn => btn.classList.remove('active-button'));
//     // add active class for clicked button
//     this.classList.add('active-button');
//     console.log('Clicked button:', this);
//   } );
// });


document.addEventListener('DOMContentLoaded', () => {
  const PageButtons = document.querySelectorAll('.PageButton');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  let currentIndex = 0; // Index of the active button

  // Function to update the active button
  function updateButtons() {
    PageButtons.forEach((button, index) => {
      button.classList.remove('active-button');
      if (index === currentIndex) {
        button.classList.add('active-button');
      }
    });
  }

  // Previous button event listener
  prevButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex > 0) {
      currentIndex--; // Decrease index
      updateButtons(); // Update buttons
    }
  });

  // Next button event listener
  nextButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex < PageButtons.length - 1) {
      currentIndex++; // Increase index
      updateButtons(); // Update buttons
    }
  });

  // Click event listener for PageButtons
  PageButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      currentIndex = index; // Set current index to the clicked button's index
      updateButtons(); // Update buttons
      // Redirect to the corresponding link
      window.location.href = button.querySelector('a').href;
    });
  });

  // Initial button update
  updateButtons();
});