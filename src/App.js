import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputText: '',
    saved: false,
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickBtn = () => {
    this.setState({saved: true})
  }

  onClickEditBtn = () => {
    this.setState({saved: false})
  }

  render() {
    const {inputText, saved} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            <input
              type="text"
              className={saved ? 'input-hide' : 'input'}
              onChange={this.onChangeInput}
            />
            <p className={saved ? 'para-show' : 'para-hide'}>{inputText}</p>
            <button
              type="button"
              className={saved ? 'hide-saveBtn' : 'saveBtn'}
              onClick={this.onClickBtn}
            >
              Save
            </button>
            <button
              type="button"
              className={saved ? 'editBtn' : 'hide-editBtn'}
              onClick={this.onClickEditBtn}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
