'use strict';

// to support chrome
if(typeof(browser) == "undefined" && typeof(chrome) !== "undefined") {
	var i18n = chrome.i18n
} else {
	var i18n = browser.i18n
}


let str = i18n.getMessage("steamButtonText")
let ustr = str.toUpperCase();
let url = "steam://openurl/" + encodeURI(window.location)

const instbtn = document.getElementById('global_action_menu')
instbtn.insertAdjacentHTML('afterbegin', '<div class="header_installsteam_btn header_installsteam_btn_green"><a style="background-color: #397198 !important; background-image: url(\'https://steamcdn-a.akamaihd.net/store/about/icon-steamos.svg\') !important; background-size: 13px" class="header_installsteam_btn_content" href="' + url + '">' + str + '</a></div>');

if (document.querySelector("#footer_nav")) {
	const footer_nav = document.querySelector('#footer_steam_pulldown').parentNode;
	footer_nav.insertAdjacentHTML('afterbegin', '<a id="footer_steam_pulldown" class="pulldown btnv6_blue_hoverfade btn_small" href="' + url + '"><span>' + ustr + '</span></a>');
} else {
	const valve_links = document.getElementsByClassName('valve_links')[0];
	valve_links.insertAdjacentHTML('beforeend', '<a style="padding-left: 10px;"></a> | <a style="padding-left: 10px;" href="' + url + '">' + str + '</a>');
}
