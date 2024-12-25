import './App.css'

import About from './components/about/index'
import ListImg from './components/collection/ListImg'
import ContactForm from './components/contact'
import { Headers } from './components/header'
import { Imgfirst } from './components/imgFirst/Imgfirst'
import Services from './components/Services'
import { SlideShow } from './components/slides/indext'

function App() {
  return (
    <div className='container mx-auto'>
      <Headers />
      <Imgfirst />
      <SlideShow />
      <ListImg />
      <About />
      <Services />
      <ContactForm />
    </div>
  )
}

export default App
