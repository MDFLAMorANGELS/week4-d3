const Home = () => {
    const preparePage = () => {
    
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
    
        const fetchList = (url) => {
          fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData)
              displayResults(responseData.results)
            });
        };
        const today = new Date();
        const nextMonth = new Date(today);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
    
        const formattedToday = today.toISOString().split('T')[0];
        const formattedNextMonth = nextMonth.toISOString().split('T')[0];
        
        fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}&dates=${formattedToday},${formattedNextMonth}&ordering=released&page_size=9`);
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

export default Home