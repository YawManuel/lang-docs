  /* What is React Native? first, we define React.js: React.js is 
    javascript library for building user interfaces.
    - usually used for web development
    - Reack itself is platform agnostic
    - Uses ReactDOM.render() to render web html for interactivity, adding to web support 
    - React is a library for building a tree of components 
   */

  /* ReactNative.js is a separate library from react
     - Renders a collection of special react components
     - Compiles components to native widget
     - ReactNative also gives you access to native platforms APIs e.g. access to native platform camera
     - ReactNative gives you tool for connecting your code to the native code 
   */

  /* Combination of React.js(which knows and gives control over interface and control) ReactNative.js
     which gives you native features similar to iOS and Android, then you can combine 
     the two to create an iOS & Android Apps
   */
     
   /* 	// React Native learining outline
    * - React Native Basic ( <Container></Container>, <View></View>, <Text></Text> )
    * - Debugging 
    * - Real Apps, Styling, Components
    * - Using Phone resources
    * - Responsive & Adoptive Apps 
    * - Navigation (React-Navigation)
    * - Managing State (Redux)
    * - Handling User Input
    * - Http Requests
    * - User Authentication
    * - Native Device Features
    * - Different Workflows
    * - Publishing Apps
    */

 Kickstarting RN cmds: avd -display_avd2
  // React + React Native App 

  const App = props=> {
    return(
            <View>
               <Text> Some try be oo </Text>
            </View>
          );
      } //NB: Views are compiled to Real Native App
  
  // Some details
   /* e.g. with ReactNative components: the "'<View>' ReactNative components" represent "<div>" in React, "android.view" in android
      and "UIView in iOS. 
      Also, "'<TextInput>' ReactNative component" represents "<input>" in React; "EditText" in android
      and "UITextField" in iOS.
      etc.
      NB: ReactNative maps re-usable components to the respective platform equivalents. 
         and also, thou ReactNative tags are similar to the normal html tags... they are not html 
         and more over their first words are capitalize e.g. <"V"iew>
    */

  // Intro to ReactNative basics
      
      /* React Native boiler plate */
   import. React from 'react';


     

      /* index.js script */

  /**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';

 AppRegistry.registerComponent(appName, () => App);


<View>
           <View style= {TheStyles.textstyle}>
            <Text text style= {TheStyles.textstyle}> Let begin the avemerk App! </Text>
           </View>
           <View style={TheStyles.buttonstyle} >
              <Button title ={'real click'}  /> 
           </View>
        
        </View>

         const TheStyles = StyleSheet.create({
    textstyle: { 
      fontSize: 20,
      alignItems: "center",
      
    },
    buttonstyle: { 
      padding:100 }
      // margin: 4}

});

  <Image style={TheStyles.image123} source={require('./Assets/P/Notification.png')}/>
            <Image style={TheStyles.image123} source={require('./Assets/P/WhiteCart.png')}/>
            <Image style={TheStyles.image123} source={require('./Assets/P/DefaultProPic.png')}/>

          <Image source={require('./Assets/P/RedHome.png')}/>


     image123: {
      height: 50,
      width:50, 
      borderRadius:60
     }













  // Pros and Cons of ReactNative











 
  
 