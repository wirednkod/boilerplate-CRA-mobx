import React, { Component } from 'react'
import { BrowserRouter as Router,
  // Route, Link
} from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ExampleContainer } from '@containers'
import store from '@stores/Store'
import './index.css'

class App extends Component {

  render() {
      return (
      <Provider store={store}>
        <Router>
          <div className="App App-header">
            <ExampleContainer />
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} /> */}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
