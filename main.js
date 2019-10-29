const testUrl = 'https://jsonplaceholder.typicode.com/posts';
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

// axios.get({
//     method: 'GET',
//     url: url,
//     responseType: 'json'
// })
// .then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });

axios.get(url)
.then(function (response) {
    let repos = response.data;

    // for of loop here which will create & populate a new card for each repo.
    // will look like this...
    for (repo of repos) {
        let cardHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${repo.name}</h5>
          <p class="card-text">${repo.description}</p>
        </div>
      </div>`;
      //let card = document.createElement('div');
      //card.innerHTML = cardHTML;
      //document.body.appendChild(card);
      document.body.innerHTML += cardHTML;
    };
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});