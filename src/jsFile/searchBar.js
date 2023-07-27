const Search = () => {
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const searchQuery = document.getElementById('searchBar').value.trim();
    window.location.href = `index.html?#pagelist/${searchQuery}`;
  })
  
  document.getElementById('searchForm').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // Vérifie si la touche pressée est la touche Entrée
      event.preventDefault(); // Empêche le rechargement de la page
      const searchQuery = document.getElementById('searchBar').value.trim();
      window.location.href = `index.html?#pagelist/${searchQuery}`;
    }
  });
};
export { Search };