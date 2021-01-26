const URI = "ec2-3-122-233-210.eu-central-1.compute.amazonaws.com:88"

async function getTeam() {
    const raw_data = await fetch(URI + '/get_all_employees')
    const json = await raw_data.json()

    for (const x in json) {
        document.getElementById("team").innerHTML += '<div class="row"> <h4>' + json[x].first_name + ' ' + json[x].last_name + '</h4> </div>'
        document.getElementById("team").innerHTML += '<div class="row">' + json[x].about + '</div>' + '<hr>'
    }
}

getTeam()
