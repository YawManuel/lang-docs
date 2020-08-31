  
 /* HTML */

 <div id = "emid"></div>



 /* CSS */

 .app {
    display: inline-block;
    margin: 10px;
    border: 1px;
    box-shadow: 0
    }

 /*   Javascript (React) */
 // With react, vue and other jswebfrontend framework: SPA & MBA(multiple page     application built with it. 
 // react apps run in the browser, not on the server like html static pages.
 // it running on the browser makes it to load faster and reduces loadtime
 /* to start with react, first.
  * - you install react
  * - second, you install reactDOM which renders the react components into the real DOM
  *
 
 // React components are normally built using functions
 // Static React components
   function app {
         return(
             <div className="app"> // in JSX, className are used rather than class
                <h1>Yaw</h1>  // when using class based components, is this.props to specify the exact                                           function its rendering in
                <p> My age: 20s </p> // dynamic content are added in a curly braces when in JSX
             </div>
        ); 
     } 
  
    ReactDOM.render( <app />, document.querySelector('#emid'));


 // Dynamic react components
 // Basic dynamic components 
 function app {
         return(
             <div className="app"> // in JSX, className are used rather than class
                <h1>{props.name}</h1>  // when using class based components, is this.props to specify the exact                                           function its rendering in
                <p> My age: {props.age}</p> // dynamic content are output  in a curly braces when in JSX
             </div>
        ); 
     } 
  
    ReactDOM.render( <app />, document.querySelector('#emid'))
    ReactDOM.render( <app />, document.querySelector('#emid2')); // with dynamic components, the ReactDOM are                                repeated twice if you want to creat a different component of the same content

 // Dynamic react components
 // Super dynamic components

  var apppp = (  // this variable is holding a JSX code(html code style in javascript synthax)
       <div>   // <div></div> must be added because it uses only one root element
           <Person name="yaw" age="25"> there you go </perso n> // props.children is use to display the content                                                                    b/n the person element
           <Person name="chief" age="20" />
       </div>    
   );   


   ReactDOM.render(apppp, document.querySelector('#appp'));  // one hook for the whole webapp 

 
      ReactDOM.creatElement('div', null, React.createElement());
      

  // componenets are functions that are used to return some blockcodes
   // functions names are usually started with small capital letters

   

  import React, { Component } from 'react';
  import './App.css';
  import Person from './Person/Person';

  class App extends Components { 
     state = {           
       persons: [
           { name: 'Yaw', age: 28},
           { name: 'Chief', age: 29},
           { name: 'Hadzah', age: 26}
       ]
      }   // setting up states

        tadaHandler = () => {
           console.log('was clicked!');  // renders when the button is clicked 
     };
 
     render() {
          return ( 
              <div className="App">
                 <h1> Hi, my name is Emmanuel Hadzah </h1>
                 <button onClick={this.tadaHandler}> tada name </button>
                 <p> my world is really working! </p>
                 <person name={this.state.person[0].name} age={this.state.person[0].age} />
                 <person name={this.state.person[1].name} age={this.state.person[1].age} />
                 <person name={this.state.person[2].name} age={this.state.person[2].age} />
              </div>
     );
   }

        export default App;



    // React hooks: -allow you to create every component as a "functional"  component
    //              -sharing(stateful) logic between components becomes easier
    //              -from using class components(e.g. state + setState) to functional component(e.g. useState(); )

         const [destroyed, setDestroyed] = useState(false);
         const [selectedCharacter, setSelectedCharacter] = useState(1);
         const [chosenSide, setChosenSide] = useState('light');
     
         useEffect (  () =>{};    ); 






















