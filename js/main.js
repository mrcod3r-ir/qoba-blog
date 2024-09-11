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
  const PageButtonsPC = document.querySelectorAll('.PageButtonPC');
  const prevButtonPC = document.getElementById('prevButtonPC');
  const nextButtonPC = document.getElementById('nextButtonPC');
  let currentIndex = 0; // Index of the active button

  // Function to update the active button
  function updateButtons() {
    PageButtonsPC.forEach((button, index) => {
      button.classList.remove('active-button');
      if (index === currentIndex) {
        button.classList.add('active-button');
      }
    });
  }

  // Previous button event listener
  prevButtonPC.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex > 0) {
      currentIndex--; // Decrease index
      updateButtons(); // Update buttons
    }
  });

  // Next button event listener
  nextButtonPC.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex < PageButtonsPC.length - 1) {
      currentIndex++; // Increase index
      updateButtons(); // Update buttons
    }
  });

  // Click event listener for PageButtonsPC
  PageButtonsPC.forEach((button, index) => {
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

document.addEventListener('DOMContentLoaded', () => {
  const PageButtonsTB = document.querySelectorAll('.PageButtonTB');
  const prevButtonTB = document.getElementById('prevButtonTB');
  const nextButtonTB = document.getElementById('nextButtonTB');
  let currentIndex = 0; // Index of the active button

  // Function to update the active button
  function updateButtons() {
    PageButtonsTB.forEach((button, index) => {
      button.classList.remove('active-button');
      if (index === currentIndex) {
        button.classList.add('active-button');
      }
    });
  }

  // Previous button event listener
  prevButtonTB.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex > 0) {
      currentIndex--; // Decrease index
      updateButtons(); // Update buttons
    }
  });

  // Next button event listener
  nextButtonTB.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex < PageButtonsTB.length - 1) {
      currentIndex++; // Increase index
      updateButtons(); // Update buttons
    }
  });

  // Click event listener for PageButtonsTB
  PageButtonsTB.forEach((button, index) => {
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

document.addEventListener('DOMContentLoaded', () => {
  const PageButtonsMiniTB = document.querySelectorAll('.PageButtonMiniTB');
  const prevButtonMiniTB = document.getElementById('prevButtonMiniTB');
  const nextButtonMiniTB = document.getElementById('nextButtonMiniTB');
  let currentIndex = 0; // Index of the active button

  // Function to update the active button
  function updateButtons() {
    PageButtonsMiniTB.forEach((button, index) => {
      button.classList.remove('active-button');
      if (index === currentIndex) {
        button.classList.add('active-button');
      }
    });
  }

  // Previous button event listener
  prevButtonMiniTB.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex > 0) {
      currentIndex--; // Decrease index
      updateButtons(); // Update buttons
    }
  });

  // Next button event listener
  nextButtonMiniTB.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex < PageButtonsMiniTB.length - 1) {
      currentIndex++; // Increase index
      updateButtons(); // Update buttons
    }
  });

  // Click event listener for PageButtonsMiniTB
  PageButtonsMiniTB.forEach((button, index) => {
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

document.addEventListener('DOMContentLoaded', () => {
  const PageButtonsMB = document.querySelectorAll('.PageButtonMB');
  const prevButtonMB = document.getElementById('prevButtonMB');
  const nextButtonMB = document.getElementById('nextButtonMB');
  let currentIndex = 0; // Index of the active button

  // Function to update the active button
  function updateButtons() {
    PageButtonsMB.forEach((button, index) => {
      button.classList.remove('active-button');
      if (index === currentIndex) {
        button.classList.add('active-button');
      }
    });
  }

  // Previous button event listener
  prevButtonMB.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex > 0) {
      currentIndex--; // Decrease index
      updateButtons(); // Update buttons
    }
  });

  // Next button event listener
  nextButtonMB.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    if (currentIndex < PageButtonsMB.length - 1) {
      currentIndex++; // Increase index
      updateButtons(); // Update buttons
    }
  });

  // Click event listener for PageButtonsMB
  PageButtonsMB.forEach((button, index) => {
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