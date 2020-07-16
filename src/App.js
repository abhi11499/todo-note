import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    };
  }

  updateNoteText = (event) => {
    this.setState({ noteText: event.target.value });
  };

  addNote = (event) => {
    event.preventDefault();
    if (this.state.noteText === '') {
      return;
    }
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: '' });
    }
  };

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  render() {
    console.log(this.state.noteText);
    let notes = this.state.notes.map((val, index) => {
      return (
        <Note
          key={index}
          text={val}
          deleteMethod={() => this.deleteNote(index)}
        />
      );
    });

    return (
      <div className="container">
        <div className="header">Todo Note</div>
        {notes}
        <form onSubmit={this.addNote}>
          <button type="submit" className="btn">
            +
          </button>

          <input
            placeholder=' Type a "Todo Note" here '
            className="textInput"
            type="text"
            ref={(input) => {
              this.textInput = input;
            }}
            value={this.state.noteText}
            onChange={this.updateNoteText}
          />
        </form>
      </div>
    );
  }
}

export default App;
