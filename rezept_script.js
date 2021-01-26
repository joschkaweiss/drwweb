const URI = "https://cms.dr-weltike.de"
async function getContact() {
    const raw_data = await fetch(URI + '/get_rezept')
    const json = await raw_data.json()
    const raw_mail = await fetch(URI + '/get_contact_data')
    const json_mail = await raw_mail.json()

    document.getElementById("heading").innerHTML += json['heading']
    document.getElementById("text").innerHTML += json['text']
    document.getElementById("email").innerHTML += json_mail['email']

}

getContact()
