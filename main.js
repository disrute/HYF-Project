'use strict'
{
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  let repoData = [];
  let contributorUrl = '';

  function getRepoData() {
    //let myData = [];
    axios.get(url)
    .then(function (res) {
      let repos = res.data;
      repos.sort((a, b) => a.name.localeCompare(b.name));
      //console.log(repos);
      repoData = repos;
      //console.log(repoData);
      return repoData;
    })
    .catch(function (error) {
      document.getElementById('colOne').setAttribute('class', 'error');
      document.getElementById('colOne').innerText = error;
    })
    .then(() => {
      populateSelect();
      firstRepo();
      userPicksRepo();
    })
    .then(() => {
      // function that has get request to grab contributor data.
      getContributorData();
    })
  };

  getRepoData();

  function populateSelect() {
    for (let i = 0; i < 10; i++) {
      let optionItem = document.createElement('option');
      optionItem.innerText = repoData[i].name;
      document.getElementById('repoSelect').appendChild(optionItem);
    }
  }

  function firstRepo() {
    let firstRepo = repoData[0];
    document.getElementById('cardDisplay').innerHTML = makeCard(firstRepo.html_url, firstRepo.name, firstRepo.description, firstRepo.forks);
    contributorUrl = firstRepo.contributors_url;
    console.log(contributorUrl);
    //document.getElementById('contDisplay').innerHTML = makeContributorCard(firstRepo.);
  }

  function userPicksRepo() {
    $(document.body).on('change', "#repoSelect", function () {
      var optVal = $("#repoSelect option:selected").val();
      // create a card with optVal name.
      let displayRepo = repoData.filter(repo => repo.name === optVal);
      document.getElementById('cardDisplay').innerHTML = makeCard(displayRepo[0].html_url, displayRepo[0].name, displayRepo[0].description, displayRepo[0].forks);
      contributorUrl = displayRepo[0].contributors_url;
      getContributorData();
    });
  };

  function getContributorData() {
    axios.get(contributorUrl)
    .then(function (response) {
      let contData = response.data;
      makeContributorCard(contData[0].avatar_url, contData[0].html_url, contData[0].login);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  function makeCard(repoUrl, repoName, repoDesc, repoForks) {
    let card = `<div class="card-body">
  <h5 class="card-title"><strong>Name:</strong> <a href="${repoUrl}" target="_blank">${repoName}</a></h5>
       <p class="card-text"><strong>Description:</strong> ${repoDesc}</p>
       <p class="card-text"><strong>Forks:</strong> ${repoForks}</p>
     </div>
   </div>`;
    return card;
  };

  function makeContributorCard(cAvatar, cUrl, cName) {
      let contCard = `<div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${cAvatar}" class="card-img" style="padding: 10px">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"><a href="${cUrl}" target="_blank">${cName}</a></h5>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById('contDisplay').innerHTML = contCard;
  };
}