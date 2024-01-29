// https://www.thesportsdb.com/api/v1/json/3/all_leagues.php

newleague.addEventListener('click',
    async e => {
        let szervervalasz_szotar = await olvaso_fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
        let sport = document.getElementById("sports");
        let selected = sport.value;
        let selectedlist = [];
        for (let i = 0; i < 50; i++)
        {
            if(szervervalasz_szotar.leagues[i].strSport == selected){
                selectedlist.push(szervervalasz_szotar.leagues[i]);
            }
        }
        
        let rnd = getRandomInt(selectedlist.length);
        league.innerHTML = selectedlist[rnd].strLeague;
        id.innerHTML = selectedlist[rnd].idLeague;
        alternate.innerHTML = selectedlist[rnd].strLeagueAlternate;
    }
);

async function olvaso_fetch(url){
    const response = await fetch(url);
    const json_promise = await response.json();
    return json_promise;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


