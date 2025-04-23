//your code here!
// Simulating items to be loaded
let itemCount = 0;

// Function to load more items
function loadItems() {
  const infiList = document.getElementById('infi-list');
  
  // Simulate loading 10 items at a time
  for (let i = 0; i < 10; i++) {
    itemCount++;
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${itemCount}`;
    infiList.appendChild(listItem);
  }
}

// Function to check if we are at the bottom of the page
function handleScroll() {
  const infiList = document.getElementById('infi-list');
  
  // If the user is at the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadItems(); // Load more items
  }
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Load initial items
loadItems();

