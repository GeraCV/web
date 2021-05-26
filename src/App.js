import './styles/root.css'

import Header from './components/header'
import Main from './components/main'
import Projects from './components/projects'
import AboutMe from './components/about'
import ContactMe from './components/contact'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <Main />
      <Projects />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
