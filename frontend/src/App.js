import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    folders: [],
    tags: [],
    notes: []
  };

  componentDidMount() {
    axios.get('http://localhost:3000/api/folders/')
      .then(res => {
        const folders = res.data;
        this.setState({ folders });
      });

    axios.get('http://localhost:3000/api/tags/')
      .then(res => {
        const tags = res.data;
        this.setState({ tags });
      });

    axios.get('http://localhost:3000/api/notes/')
      .then(res => {
        const notes = res.data;
        this.setState({ notes });
      });
  }

  render() {
    return (
      <div>
        <h1>Folders</h1>
        {this.state.folders.map(folder => (
          <div key={folder.id}>
            <h2>{folder.name}</h2>
            <p>{folder.description}</p>
          </div>
        ))}

        <h1>Tags</h1>
        {this.state.tags.map(tag => (
          <p key={tag.id}>{tag.name}</p>
        ))}

        <h1>Notes</h1>
        {this.state.notes.map(note => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
