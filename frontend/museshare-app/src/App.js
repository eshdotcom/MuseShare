import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import UploadPage from './Pages/UploadPage'
import FeedPage from './Pages/FeedPage'

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about-us" component={AboutUsPage} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/feed" component={FeedPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
