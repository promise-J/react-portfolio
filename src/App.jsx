import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


// Guys check your email now @teamtreehouse. please......

// 1. onyebuchic106@gmail.com
// 2. desjohnson88@gmail.com
// 3. mercy_nwaodu@yahoo.com
// 4. ezelumwilliams@gmail.com
// 5. Okwarafrank2000@gmail.com
// 6.  Johnkarolt@gmail.com
// 7.  nwekedaniel1997@gmail.com
// 8. chibuikenworah23@gmail.com
// 9. ilechukwufran6x@gmail.com

