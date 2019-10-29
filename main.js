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
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
});