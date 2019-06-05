if(!browser) {
      var browser = chrome // to support chrome
}
var btntxt = browser.i18n.getMessage("steamButtonText")
var e = document.getElementsByClassName("logo")[0]
var f = document.getElementsByClassName("footer_content")[0]
var a = document.createElement("a")
var ref = document.createAttribute("href")
ref.value = "steam://openurl/"+encodeURI(window.location)
var btn = document.createElement("button")
var t = document.createTextNode(btntxt)
btn.append(t)
a.setAttributeNode(ref)
a.append(btn)
e.append(a)
var span = document.createElement("span")
var ab = document.createElement("a")
var refb = document.createAttribute("href")
refb.value = "steam://openurl/"+encodeURI(window.location)
var btnb = document.createElement("button")
var tb = document.createTextNode(btntxt)
btnb.append(tb)
ab.setAttributeNode(refb)
ab.append(btnb)
span.append(ab)
f.append(span)
