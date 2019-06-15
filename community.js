var ModalItemUrl = "steam://openurl/" + encodeURI(document.getElementById('modalContentTitleBarLink').href)
var contentTitleBar = document.getElementById('modalContentTitleBar')
contentTitleBar.insertAdjacentHTML('afterbegin', '<div class="header_installsteam_btn header_installsteam_btn_green" style="margin-top: -4px; margin-right: 20px; float: right;"><a style="background-color: #397198 !important; background-image: url(\'https://steamcdn-a.akamaihd.net/store/about/icon-steamos.svg\') !important; background-size: 13px" class="header_installsteam_btn_content" id="ModalItemButton" href="' + ModalItemUrl + '">' + str + '</a></div>');
function refreshModalItemUrl() {
	ModalItemUrl = "steam://openurl/" + encodeURI(document.getElementById('modalContentTitleBarLink').href)
	document.getElementById('ModalItemButton').href = ModalItemUrl
	console.log("ping!")
}
setInterval(refreshModalItemUrl, 2000)
