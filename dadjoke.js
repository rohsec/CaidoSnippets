// Dad Joke and Menu Editor:

// Function to fetch a dad joke from "https://icanhazdadjoke.com"
async function getDadJokeAndShowPopup() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch dad joke");
    return;
  }

  const data = await response.json();
  const joke = data.joke;
  alert("It's okay, we all get bored sometimes 😒 Here's a dad joke for you 👇\n\n"+joke);
}

// Wrap the code in a setTimeout to wait for the elements to be ready
setTimeout(() => {
  // Create a new menu in the sidebar body
  const sidebarBody = document.querySelector('.c-sidebar__body');
  const xx=document.querySelector('.c-sidebar__body');
newMenu=document.createElement('div');
newMenu.classList.add('c-sidebar-group__title');
newMenu.setAttribute('data-v-70f76033','');
newMenu.textContent="---- 𝝘𝝝𝝜𝗦𝝨𝗖 ----";
xx.append(newMenu);
  
  //Create a new button in the sidebar body
  const stylishButton = document.createElement('button');
  stylishButton.classList.add('stylish-button');
  stylishButton.textContent = '🥱 Bored ?';

  // Add a click event listener to fetch and show a joke in a modern alert
  stylishButton.addEventListener('click', getDadJokeAndShowPopup);

  // Append the button to the sidebar body
  sidebarBody.appendChild(stylishButton);
}, 1000); // Adjust the timeout value as needed

