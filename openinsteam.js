'use strict';

// to support chrome
if(typeof(browser) == "undefined" && typeof(chrome) !== "undefined") {
	var i18n = chrome.i18n
} else {
	var i18n = browser.i18n
}


var str = i18n.getMessage("steamButtonText")
let ustr = str.toUpperCase();
let url = "steam://openurl/" + encodeURI(window.location)

const instbtn = document.getElementById('global_action_menu')

var instbtndiv = document.createElement("div")
instbtndiv.className = "header_installsteam_btn header_installsteam_btn_green"

var instbtna = document.createElement("a")
instbtna.className = "header_installsteam_btn_content"
instbtna.href = url
instbtna.textContent = str
instbtna.setAttribute("style", "background-color: #397198 !important; background-image: url('https://steamcdn-a.akamaihd.net/store/about/icon-steamos.svg') !important; background-size: 13px")

instbtndiv.appendChild(instbtna)

instbtn.insertAdjacentElement('afterbegin', instbtndiv);

if (document.querySelector("#footer_nav")) {
	const footer_nav = document.querySelector('#footer_steam_pulldown').parentNode;
	
	var footera = document.createElement("a")
	footera.className = "pulldown btnv6_blue_hoverfade btn_small"
	footera.href = url
	footera.setAttribute("id", "footer_steam_pulldown")
	
	var footerspan = document.createElement("span")
	footerspan.textContent = ustr
	
	footera.appendChild(footerspan)
	
	footer_nav.insertAdjacentElement('afterbegin', footera);
} else {
	const valve_links = document.getElementsByClassName('valve_links')[0];
	
	var links1 = document.createElement("a")
	links1.setAttribute("style", "padding-left: 10px;")
	
	var links2 = document.createElement("a")
	links2.setAttribute("style", "padding-left: 10px;")
	links2.href = url
	links2.textContent = str
	
	valve_links.insertAdjacentElement('beforeend', links1);
	valve_links.innerHTML += " | "
	valve_links.insertAdjacentElement('beforeend', links2);
	//valve_links.insertAdjacentElement('beforeend', '<a style="padding-left: 10px;"></a> | <a style="padding-left: 10px;" href="' + url + '">' + str + '</a>');
}
