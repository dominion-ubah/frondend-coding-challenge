const news = document.getElementById("news");
const mar = document.getElementById("mar");
const url =
'https://newsapi.org/v2/top-headlines?' +
'sources=hacker-news&' +
'apiKey=a7e7c1796ff3404e85e4a491df189ac0';
var que = ``;

fetch(url)
  .then(resp => resp.json())
  .catch(error => console.log(error))
  .then(function(data) {
    console.log(data);
    data.articles.forEach(element => {

        
        mar.innerHTML +=`${que}`
        
        if (
            element.title === null ||
            element.description === null ||
            element.urlToImage === null ||
            element.source.name === null
            ) {
                news.innerHTML += "";
            } else {
                que += `${element.description} `;
                //Add all news to bootstrap cards
                var rec = (element.publishedAt.split('.')[0]).split('T').join(' ').split(':').splice(0, 2).join(':').split(" ").join(' &nbsp;&nbsp;||&nbsp;&nbsp;  ')
                news.innerHTML += `<a href="${
                    element.url
                }" target="_blank" style="text-decoration: none">
                <div class="card-deck d-inline-block">
                <div class="card mt-3 rounded-0" style="max-width: 18rem">
                <img class="card-img-top rounded-0" src="${
                    element.urlToImage
                }" style="height: 12rem" alt="Headline News Photo">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5><hr>
                <footer class="blockquote-footer">${element.source.name} </footer>
                <small>${rec}</small>
                </div>
                </div>
                </div>
                </a>
                `;
            }
            // que.join(' ');
    });
  });
