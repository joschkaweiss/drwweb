const URI = "https://cms.dr-weltike.de"

async function getServices() {
    const raw_data = await fetch(URI + '/get_all_services')
    const json = await raw_data.json()

    for (const x in json) {
        document.getElementById("leistungen").innerHTML += '<div class="row justify-content-center">' + '<h3>' + json[x].heading + '</h3> </div>'
        document.getElementById("leistungen").innerHTML += '<div class="row justify-content-center">' + '<h6 class="text-muted">' + json[x].heading2 + '</h6> </div>'
        document.getElementById("leistungen").innerHTML += '<div>' + '<p class="text-center">' + json[x].text + '</p> </div> <hr> <br>'
    }
}

getServices()
