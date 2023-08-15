import './App.css';

// import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//  class App extends Component {
    const App = ()=> {
    const pageSize = 6;
    const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
        <Router>
        <Navbar/>
          <Switch> 
          <Route exact path="/"><News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News  apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News  apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/technology"><News  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
          <Route exact path="/science"><News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/health"><News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
        </Switch>  
     
       </Router>
      </div>
    )
  }
export default App;


// import LoadingBar from 'react-top-loading-bar'

// const App = ()=> {
//   const pageSize = 5;
//   const apiKey = process.env.REACT_APP_NEWS_API
//   const [progress, setProgress] = useState(0)
 
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <LoadingBar
//         height={3}
//         color='#f11946'
//         progress={progress} 
//       />
//         <Switch>    
//           <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
//           <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
//           <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route>  
//           <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
//         </Switch>
//         </Router>
//       </div>
//     )
 
// }

// export default App;