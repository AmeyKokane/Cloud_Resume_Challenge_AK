window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const functionApi = 'https://counter-resume-ak.azurewebsites.net/api/HttpTrigger1?code=vWvfQ2luXx-odLI0a3xxw0nXJG8u0LgB43P_18NJkMg_AzFuvP7gtg==';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then(response => {
      return response.json()
    })
    .then(response => {
      count = response;
      console.log("Hello Hooman 🤖, you are visitor number - " + count);
      document.getElementById('counter').innerText = count;
    }).catch(function (error) {
      console.log(error);
    });
  return count;
}