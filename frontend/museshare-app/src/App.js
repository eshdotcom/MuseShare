import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import UploadForm from './Components/UploadForm'
import CollaboratePage from './Pages/CollaboratePage'

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/upload" component={UploadForm} />
            <Route exact path="/collaborate" component={CollaboratePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
