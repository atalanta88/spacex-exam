const url = "https://api.spacexdata.com/v3/launches/upcoming";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + url;

async function fetchLaunches() {
  try {
    const response = await fetch(corsEnabledUrl);

    const json = await response.json();

    displayLaunches(json);

    console.log(json.results);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("everything is done");
  }
}

fetchLaunches();

function displayLaunches(rockets) {
  console.log(rockets);

  const container = document.querySelector(".rockets-container");

  let html = "";

  for (let i = 0; i < rockets.length; i++) {
    html += `<div class="launch-containers">

    <div class="image"></div>
    <h2> ${rockets[i].mission_name}</h2>
    <p><span>Flight number:</span> ${rockets[i].flight_number}</p>
    <p><span>Rocket name:</span> ${rockets[i].rocket.rocket_name}</p>
    <p><span>Launch date:</span> ${rockets[i].launch_date_local}</p>                    
    <p><span>Launch site:</span> ${rockets[i].launch_site.site_name_long}</p>
    <p><span>Payload:</span> ${rockets[i].rocket.second_stage.payloads[0].payload_type}</p>
    <p><span>Nationality:</span> ${rockets[i].rocket.second_stage.payloads[0].nationality}</p>
    <a class="button-links" href="https://www.spacex.com/news">SpaceX news link</a>
    </div>`;
  }

  container.innerHTML = html;
}
