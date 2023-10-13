//your code here
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '').trim();
}
 
// Array of band names
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal']
 
// Remove articles and sort the band names
let sortedBandNames = bandNames.map(removeArticles).sort();
 
// Create an HTML list
const ul = document.createElement('ul');
ul.id = 'band';
 
sortedBandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
 
// Append the list to the document's body or another desired location
document.body.appendChild(ul);
// Define the array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'Metallica', 'The Beatles', 'Led Zeppelin', 'Nirvana'];

// Function to remove articles and sort lexicographically
function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];

  const sortedNames = bandNames.slice().sort((a, b) => {
    // Helper function to remove articles from a band name
    const removeArticles = (name) => {
      for (const article of articles) {
        const regex = new RegExp(`^${article} `, 'i');
        name = name.replace(regex, '');
      }
      return name;
    };

    const nameA = removeArticles(a).toLowerCase();
    const nameB = removeArticles(b).toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return sortedNames;
}

// Get the ul element with the id 'band'
const ulElement = document.getElementById('band');

// Sort the band names and create li elements
const sortedBandNames = sortBandNames(bandNames);
sortedBandNames.forEach((bandName) => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

