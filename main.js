const testUrl = 'https://jsonplaceholder.typicode.com/posts';
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

axios.get(url)
.then(function (response) {
    let repos = response.data;
    repos.sort((a, b) => a.name.localeCompare(b.name));

    // for of loop here which will create & populate a new card for each repo.
    // will look like this...

    // loop to display on first 10 repos.

    for (let i = 0; i < 10; i++) {
        let cardHTML = `<div class="card" style="width: 60vw;">
        <div class="card-body">
          <h5 class="card-title"><strong>Name:</strong> ${repos[i].name}</h5>
          <p class="card-text"><strong>Description:</strong> ${repos[i].description}</p>
          <p class="card-text"><strong>Forks:</strong> ${repos[i].forks}</p>
        </div>
      </div>`
      document.body.innerHTML += cardHTML;
    };

    // for (repo of repos) {
    //     let cardHTML = `<div class="card" style="width: 60vw;">
    //     <div class="card-body">
    //       <h5 class="card-title"><strong>Name:</strong> ${repo.name}</h5>
    //       <p class="card-text"><strong>Description:</strong> ${repo.description}</p>
    //       <p class="card-text"><strong>Forks:</strong> ${repo.forks}</p>
    //     </div>
    //   </div>`;

      //document.body.innerHTML += cardHTML;
    //};
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});