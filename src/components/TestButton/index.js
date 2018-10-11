import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { inject } from 'mobx-react'

class TestButton extends Component {

  render() {
    let store = this.props.store

    return (
      <button onClick={
        () => store.alterName('And the name is altered')
      }>{ store.name }</button>
    )
  }
}

export default inject("store")(observer(TestButton))
