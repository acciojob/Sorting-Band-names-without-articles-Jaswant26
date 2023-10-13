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
