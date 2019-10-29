const testUrl = 'https://jsonplaceholder.typicode.com/posts';
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

axios.get(url)
.then(function (response) {
    let repos = response.data;
    repos.sort((a, b) => a.name.localeCompare(b.name));

    // for (let i = 0; i < 10; i++) {
    //     let cardHTML = `<div class="card" style="width: 60vw;">
    //     <div class="card-body">
           
    // };

    for (let i = 0; i < 10; i++) {
      let optionItem = document.createElement('option');
      optionItem.innerText = repos[i].name;
      document.getElementById('repoSelect').appendChild(optionItem);
    };


    // grab the name of the selected option
    $(document.body).on('change', "#repoSelect", function (e) {
      var optVal = $("#repoSelect option:selected").val();
      // create a card with optVal name.
      let displayRepo = repos.filter(repo => repo.name === optVal);
      console.log(displayRepo[0]);

      let cardHTML = `<div class="card";">
      <div class="card-body">
      <h5 class="card-title"><strong>Name:</strong> <a href="${displayRepo[0].html_url}" target="_blank">${displayRepo[0].name}</a></h5>
           <p class="card-text"><strong>Description:</strong> ${displayRepo[0].description}</p>
           <p class="card-text"><strong>Forks:</strong> ${displayRepo[0].forks}</p>
         </div>
       </div>`
      document.getElementById('cardDisplay').innerHTML = cardHTML;
    });

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
})
.catch(function (error) {
  document.getElementById('colOne').setAttribute('class', 'error');
  document.getElementById('colOne').innerText = error;
});