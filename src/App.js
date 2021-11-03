import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import Header from './components/header/header.component';
import Footer  from './components/footer/footer.component';
import Policy from './pages/policy/policy.component';
import OutlinedCard from './components/card/card.component';
import HomePage from './pages/homepage/homepage.component';

const  App = () => {
  return (
    <div className="App">
  <BrowserRouter>
    <Header/>
    <Footer/>
    <Switch>
    <Route exact path = '/' component = {HomePage}/>
    <Route exact path = '/policy' component = {Policy}/>
    <Route exact path = '/contact' component = {OutlinedCard}/>
    </Switch>
  </BrowserRouter>  
    </div>
  );
}

export default App;
