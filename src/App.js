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
      <div className="second-section">
        <AboutMe />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
