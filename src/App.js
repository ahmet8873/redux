import Counter from "./components/Counter";
import Actions from "./components/CounterActions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container,Row,Col } from "react-bootstrap";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/routeComponents/Home'
import Galery from './components/routeComponents/Galery'
import About from './components/routeComponents/About'

import {useSelector} from 'react-redux'

function App() {

  const {dark,language}=useSelector(state=>state.site)
  return (
    <div className={dark ? 'dark':'light'}>
<BrowserRouter>



<Container>
        <Row>
          <Col xs={6}>
            <Header></Header>
           <Counter></Counter>
            <Actions></Actions>

            <Routes>
            <Route path="/" exact='true' element={<Home />} />
              <Route path="/About" exact='true' element={<About/>} />
              <Route path="/Galery" exact='true' element={<Galery/>} />
            </Routes>
              <Footer></Footer>
      
          </Col>
          <Col xs={6}>
           {language}
  
          </Col>
        </Row>

      </Container>


</BrowserRouter>
      
   

         
     
    </div>
  );
}

export default App;
