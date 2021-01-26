const URI = "https://cms.dr-weltike.de"

async function getContact() {
    const raw_data = await fetch(URI + '/get_contact_data')
    const json = await raw_data.json()

    document.getElementById("kontakt").innerHTML += '<div class="row">' + '<h3>' + json.name + '</h3>' + '</div>'
    document.getElementById("kontakt").innerHTML += '<div class="row">' + '<h3>' + json.street + '  ' + json.number + '</h3>' + '</div>'
    document.getElementById("kontakt").innerHTML += '<div class="row">' + '<h3>' + json.zip + '  ' + json.city + '</h3>' + '</div>'
    document.getElementById("kontakt").innerHTML += '<div class="row">' + '<h3>' + 'Telefon: ' + json.phone + '</h3>' + '</div>'
    document.getElementById("kontakt").innerHTML += '<div class="row">' + '<h3>' + 'E-Mail: ' + json.email + '</h3>' + '</div>'

}

async function getTimes() {
    const raw_data = await fetch(URI + '/get_all_times')
    const json = await raw_data.json()

    for (const x in json) {
        document.getElementById("zeiten").innerHTML += '<div class="row justify-content-center">' + '<h4 class="text-center">' + json[x].day + '</h4>' + '</div>' + '<div class="row justify-content-center">' + '<h6 class="text-center">' + json[x].time + '</h6>' + '</div> <br> <br>'
    }
}

getTimes()
getContact()
