import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.state = { color: '#000' };
   }
   render() {
      return (
         <div>
            <h1 style={{ color: this.state.color }}>Tutorialspoint</h1>
            <button onClick={() => this.setState({ color: '#ff0000' })}>
               Change Color
            </button>
            <MyComp />
         </div>
      );
   }
}
class MyComp extends React.Component {
   shouldComponentUpdate(nextProps) {
      // Rendering the component only if
      // passed props value is changed
      if (nextProps.value !== this.props.value) {
         return true;
      } else {
         return false;
      }
   }
   render() {
      console.log('MyComp component is called');
      return (
         <div>
            <h1>Simply Easy Learning</h1>
         </div>
      );
   }
}
export default App;