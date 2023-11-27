


const url = "https://swapi.dev/api/people/1";
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
};
fetch(url, options)
    .then(response => {
        return response.json();
    })
    .then(person => {
        console.log(person);
    })
    .catch(error => {
        console.log(error);
    })
// MAIN
(()=>{


})();