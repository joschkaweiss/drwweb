const URI = "http://52.29.40.202"

async function getTeam() {
    const raw_data = await fetch(URI + '/get_all_employees')
    const json = await raw_data.json()

    for (const x in json) {
        document.getElementById("team").innerHTML += '<div class="row"> <h4>' + json[x].first_name + ' ' + json[x].last_name + '</h4> </div>'
        document.getElementById("team").innerHTML += '<div class="row">' + json[x].about + '</div>' + '<hr>'
    }
}

getTeam()