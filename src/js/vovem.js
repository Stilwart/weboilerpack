import '@/styles/index.scss'
import webLogo from '@/assets/img/logo.png'

// web content
function vovemdev() {
  return `Weboilerpack bundle web content into single page with customize`
}
// webpack logo
const packLogo = document.createElement('img')
packLogo.src = webLogo
packLogo.className="logo"
packLogo.alt="webpack"
// headerText
const headerText = document.createElement('h1')
headerText.textContent = vovemdev()
// GitHub
const aTage = document.createElement('a')
aTage.target= '_blank'
aTage.setAttribute('href','https://github.com/vovem/weboilerpack')
aTage.innerHTML = "GitHub Repository";
// html root
const app = document.querySelector('#root')
app.append(packLogo, headerText, aTage)

