import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    //addItem() is an action creator that returns a action object
    // this.props.store.dispatch(addItem());
    this.props.addItem();
  }

  render() {
    
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: () => dispatch(addItem())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

//=========== ALTERNATE METHOD OF mapping states and actions to props.

export default connect(state => ({items: state.items}), { addItem: addItem })(App);
