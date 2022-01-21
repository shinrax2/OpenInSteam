'use strict';

// to support chrome
if(typeof(browser) == "undefined" && typeof(chrome) !== "undefined") {
	var i18n = chrome.i18n
} else {
	var i18n = browser.i18n
}

let str2 = i18n.getMessage("steamButtonText")
var ModalItemUrl = "steam://openurl/" + encodeURI(document.getElementById('modalContentTitleBarLink').href)
const contentTitleBar = document.getElementById('modalContentTitleBar')

var div = document.createElement("div")
div.className = "header_installsteam_btn header_installsteam_btn_green"
div.setAttribute("style", "margin-top: -4px; margin-right: 20px; float: right;")

var a = document.createElement("a")
a.className = "header_installsteam_btn_content"
a.setAttribute("id", "ModalItemButton")
a.setAttribute("style", "background-color: #397198 !important; background-image: url('https://steamcdn-a.akamaihd.net/store/about/icon-steamos.svg') !important; background-size: 13px")
a.href = ModalItemUrl
a.textContent = str2

div.appendChild(a)

contentTitleBar.insertAdjacentElement('afterbegin', div);

function refreshModalItemUrl() {
	ModalItemUrl = "steam://openurl/" + encodeURI(document.getElementById('modalContentTitleBarLink').href)
	document.getElementById('ModalItemButton').href = ModalItemUrl
}
setInterval(refreshModalItemUrl, 1000)
