const URI = "http://127.0.0.1:80";

async function getHinweis() {
    const raw_data = await fetch(URI + "/get_hinweis");
    const json = await raw_data.json();

    if (json['visibility'] == true) {
        document.getElementById("hinweis").innerText += json['text']
    }
}

async function getHome() {
    const raw_data = await fetch(URI + "/get_home");
    const json = await raw_data.json();

    document.getElementById("home_heading").innerHTML += json['heading']
    document.getElementById("home_text").innerHTML += json['text']
}

async function getContact() {
    const raw_data = await fetch(URI + '/get_contact_data')
    const json = await raw_data.json()
    document.getElementById("kontakt").innerHTML += '<strong>' + json['name'] + '</strong>'
    document.getElementById("kontakt").innerHTML += '<br>' + json['street'] + ' ' + String(json['number'])
    document.getElementById("kontakt").innerHTML += '<br>' + String(json['zip']) + ' ' + json['city']
    document.getElementById("kontakt").innerHTML += '<br>' + json['phone']
    document.getElementById("kontakt").innerHTML += "<br>" + json['email'];
}

async function getTop3() {

    const raw_data = await fetch(URI + "/get_top3");
    const json = await raw_data.json()

    document.getElementById('heading1').innerHTML += String(json['heading_1'])
    document.getElementById('text1').innerHTML += String(json['text_1'])

    document.getElementById("heading2").innerHTML += String(json["heading_2"]);
    document.getElementById("text2").innerHTML += String(json["text_2"]);


    document.getElementById("heading3").innerHTML += String(json["heading_3"]);
    document.getElementById("text3").innerHTML += String(json["text_3"]);


}


getHome();
getContact();
getHinweis();
getTop3();