import React from 'react';
import Store from './store.js';
import './App.css';
import List from './composition/List';

class App extends React.Component{
  static defaultProps = {
    store: Store
  };

  render() {
    const store = this.props.store;
    const appList = store.lists.map(
      list => 
        <List
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(cardId => store.allCards[cardId])}
        />
    );

    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {appList}
        </div>
      </main>
    );
  }
}

export default App;