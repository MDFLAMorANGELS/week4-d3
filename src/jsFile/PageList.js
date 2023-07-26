const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="container-cardGame">
        <img class="container-cardGame-image" src="${article.background_image}" alt="image du jeu ${article.name}" />
        <div class="container-cardGame-content">
          <h3>${article.name}</h3>
          <h3>Release : ${article.released}</h3>
          <a href="#pagedetail/${article.id}">Show More</a>
        </div>
      </article>`
      ));
      const resultsContainer = document.querySelector('.container');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="container">
        <div class="container-articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

export default PageList