import Header from './components/Header'
import Showcase from './components/Showcase'
import PriceList from './components/PriceList'
import Map from './components/Map'
import Footer from './components/Footer'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
      ${Header()}
      ${Showcase()}
      ${PriceList()}
      ${Map()}
      ${Footer()}
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;