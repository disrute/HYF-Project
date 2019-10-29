const testUrl = 'https://jsonplaceholder.typicode.com/posts';
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

axios.get(url)
.then(function (response) {
    let repos = response.data;
    // sort
    repos.sort((a, b) => a.name.localeCompare(b.name));

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

    // NOTE: you can select to display using the for loop which has more control over how many items are display,
    // or use the 'for of' below to format all retrieved repos.

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
  document.getElementById('main').setAttribute('class', 'error');
  document.getElementById('main').innerText = error;
});