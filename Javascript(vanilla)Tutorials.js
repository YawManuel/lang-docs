                     // INTRO TO JAVASCRIPT
 
 /* EMACScript (ES), also nicknamely called javascript is use to build a variety of softwares
  *  - can be use to build Web Apps (React, Angular, Vue, D3.js etc)
  *  - can be use to build Mobile Apps (React Native)
  *  - can be use to build Desktop Apps (Electron)
  *  - can also be used for server side Back End (Node.js)
  */                  



                    // JAVASCRIPT BASICS: Syntax and Types

/* javascript tag '<scrip> alert('hello world'); </script>' or <script src='try.js'></script>
   are placed at the end of the closing tag '</body>' to help
   the loading speed of the webpage */
   
   // variables  (let and constants)
    let name = 'Manuel'; // the 'let' variable allows you to overide the variable value in future
    let age = 25;
    
   console.log(name, age); // this calls the name and age value when you run it
     
     const points = 100; // the 'const' variable don't allow you to overide the variable value
      
    console.log(points); // this also calls the 'points' variable value when run
    
     var grand = papa; // the 'var' is the old synthax way for stating a variable in JS
     
     console.log(grand); 
     
      NB: - variables don't start with numbers
          - camel case are used doulbe words
          - reserved keywords in JS can't be used as variables name
          - make variables name meaningful
   
    // javascript data types 
       /* there seven types of data types used in javascript, these are:
          Numbers, strings, 
          Bolean (true/false): these are used to evaluate conditions.
          Null: used to explicitly set a varialbe with no value
          Undefined: for variables that have not yet been defined and can't be recognized by a browser
          Objects: are complex data structures- Arrays, Dates, literals etc
          Symbols: are new editions to the JS language, normally used with objects
        */

       NB: variables can hold any type of data type

   //Strings
    console.log('hello, mum');

    let email = 'yawmanuelfestive';
     console.log(email);
 
   /* concatenation of strings is the adding of two strings together */
     let firstName = 'Emmanuel';
     let surName = 'Hadzah';  
      
     let fullName = ( firstName + '  ' + surName); // the ' ' inserted creates space b/n the two names when you run the result variable
     console.log(fullName);

   /* getting characters */
      console.log(surName[0]); // thsi displays the first letter of the surname 'H'
   
   /* string length */
    console.log(surName.length); // the 'lenght' is a property that displays the length of the surName 'Hadzah'

   /* string methods */
   console.log(fullName.toUpperCase()); // the 'toUpperCase' is a method that performs it function when added to the variable
   let result = fullName.toLowerCase();
   console.log(result, fullName);
    
   /* learn more on string methods...

    //Numbers
      /* numbers are used for age, score, years, calculations (all typical math operations) etc... */               
   let like = 10;
   console.log(like); // displays 10
   
   likes = like + 1;
   console.log(likes); // displays 11, since one is added to 'like' value that is '10'
   
    like++; // the shorthand form for displaying 11
    like--; // the shorthand form for displaying 9
 
    like +=10; // this displays 20, because it add another 10 to the 'like' value to be 20
    like -=5;  // this display 15, by subtracting 5 to the 'like' value 10
    console.log(like);
    console.log(like);

    let result = ' the blog has ' + like + ' contents ';
     console.log(result); // this is how you add numbers together, called catenation

    /* math operators +, -, *, /, **(stands for power off), % 
       order of operation BIDMAS
    */
      let result = 4 * (34/2)**6;
      console.log(result);

   /* NB: when performing a calculations and NaN appears when you run the code, then it
      means there is a problem or error in your codes
   */

      const title = 'Best read of 2019';
      const author = 'Mario';
      const likess = 30;  // an e.g. for showing a template string
      
      let result = `My ${title} is ${author}, having a ${likess}`; // template string way
      console.log(result);
         
      let html = ` <h2>${title}</h2>
                   <p> By ${author}</p>
                   <span> Mine ${likess} </span>
                 `;

     // Objects (Arrays)
      let yawManuel = ['rrkane', 'adesua', 'scuzzy2g', 30, true, 100]; // arrays can store any data types
       console.log(yawManuel[1]);  // this displays 'adesua'
        
       yawManuel[1] = 'yawfestive';
      console.log(yawManuel[1]);  // this overides the value of [1] and display 'yawfestive' not 'adesua'

      let arRl = yawManuel.length // array properties
      console.log(arRl);

      let arRl = yawfestive.join('-'); // array methods
      let arRl =  yawfestive.pop();   // array methods
 
    
   // Null(an intentional lack of value)  and Undefined (an unintional lack of value)
      let age;
      console.log(age, age, + 4,`the age is ${age}`);  // undefined type, it displays as undefined when run
    
      let age = null;
      console.log(age, age, + 4,`the age is ${age}`);  // null type, it displays as null when run
  
   // Booleans
     console.log(true, false);  // Boolean comparison

     let email = 'myemail@gmail.com';
     let emaiTesting = email.include('@');  // Defining boolean in methods
     console.log(emailTesting);  // the 'include()' in the previous line is method that can return booleans
                                 // returns true when you run it 

     let age = 25;
     
     console.log(age == 25);   // displays true when run
     console.log(age == 30);   // displays false when run
     console.log(age != 30);   // displays true when run
     console.log(age > 20);    // displays true when run
     console.log(age <= 25);    // displays true when run]
                                // all these are loose comparison
     let name = 'germ';

     console.log(age == 'germ');   // displays true when run
     console.log(age == 'Germ');   // displays false when run bcos in JS small letter e.g. 'g' are greater than capital letter e.g. 'G'
     console.log(age > 'alavan');   // displays true when run bcos in JS the 'g' later than 'a', making 'g' greater
     console.log(age > 'Germ');    // displays true when run
     console.log(age > 'Alavan');    // displays true when run bcos in JS  the 'g' comes later than 'A' and also the 'g' is a smallcase whilst 'A' is not
                                     // all these are loose comparison
    
     let name = 'germ';

     console.log(age === 25);   // displays true when run
     console.log(age === '25');   // displays false because of the quotation mark
     console.log(age !==  25);   // displays false when run 
     console.log(age !== '25');    // displays true when run
                                   // all these are strict  comparison
    
 

   // Type conversion (converting one data type to another)
        let score = '100';
        
        console.log(score + 1);  // this displays as '1001'

        score = Number(score);  // this converts the string '100' into number
        console.log(score + 1)  // now displays as '101' when run;
                               // you cant convert a string like 'yellow' into a nuber, will display as 'NaN'
         
        let result = String(50); // converts this number into string
        let result = Boolean(0); // converts this nuber value into boolean
        let result = Boolean ('100');  // converts this string into boolean

       consolel.log(result, typeof result);  // all of these are explicit form of conversion but we also have inplicit form of conversion
                       
            
     
                    // JAVASCRIPT CONTROL FLOW: conditional statements and loops


   /* Control flow are used to control the flow of codes in a programm */
 
 // Loops
  /* loops can be used to cycle through data */
    for (let i = 0; i < 5; i++){
        console.log(i);  // loops to 4
    }
        console.log('loop finished'); //displays 'finished' when 4 is displayed
    
    const = ['merhn', 'nicey', 'laurel' ]
       
      for(let i = 0; i < names.length; i++){
         console.log(names[1]);
        }  // loops don't contain semicolon at the end of a curly brackets
  
  /* while loops */
   let i = 0;
    
   while (i < 5){
            console.log(i);
         i++;
     }

  /* do while loops: an extension of the while loop */
  
    let i = 5;

     do {
       console.log('val of i is', i);
       i++;
      }
      while(i < 5);   // NB: 'do while' loops are used when you want run the code even thou the conditional statements might be wrong


  // Conditional statements
    /* conditional statements can be used for checking conditions.
       - executes codes once, we use the 'const' variable keyword
    */
  
   /* if statements */
     const password = 'p@ssword';

     if (password.lenght >= 8){
       console.log('password is strong');
      }

     const nickNames = ['scuzzy2g', 'adesua', '1Love', '40'];
       
      if(nickNames.lenght > 2){ console.log('You have chaw nicknames');
        }

   /* else if statements */

     const password = 'p@ss';

     if (password.lenght >= 8){
       console.log('password is strong');
      }  else {
          console.log('password is not long enough');
        }

    const password = 'p@ssword1230';

     if ((password.lenght >= 12) && (password.includes('@'))){
       console.log(' very strong password');
      }  else if (password.lenght >= 8){ 

          console.log('password lightly strong');

        } else {
           console.log('password weak');
          }   // NB:   with logical operators, the "||" presides over all when use other logical operators in addition
      /* logical NOT(!): the logical if statments only executes it block of codes 
         when it parameters are true. But to executes it block of codes when you 
         want it parameters to be writen as false, then you add  (!) to the state in
         the parameter
       */

       let user = false 

       if (!user) {      // the '!' added to the 'user' having a 'false' varialbe is switch to a 'true boolean'
           console.log('an example of adding boolean to logic statements');
         } 
          console.log(user);

       let user = false
 
       if (user) {  console.log( ' how to change the boolean variable value at the calling console.log()');
                 }

          console.log(!user);  // the '!' in the console.log switch the 'user' value from false to true boolean


     /* break and continue */

   const = [ 50, 25, 0, 30, 100, 20, 10];

     for(let i = 0; i < scores.length; i++){
         if (scores[1] === 0){
              continue;  // the condition code continues to run when scores[1] is identical to 0
          }

    if (scores[1] === 100){
           console.log('congrats, you got the top score');
         
            break;  // the code breaks and stop running when 'scores[1] is identical to 100'
          }
       }


     /* switch statements: used when checking multiple possible value of a variable */
    const grade = 'A';

       switch(grade){  // switch statements use '===' strict equality to check
            case 'A';
              console.log('you got an A'); 
                break;  // breaks the code from runnig when the case matches

             case 'B';
              console.log('you got a B');
      
             case 'C';
              console.log('you got a C');

             default;
              console.log('grade not valid');  // default is used when no case is defined

          }  // the switch control flow is used to replace the lenghty 'if', 'else if ' , 'else if'

      /* block scope with variables */
       /* 'let' and 'const' are good when dealing with block scopes than using 'var' */
      
        let age = 30;  // this is a root variable(normally at the top of a script
      
       if (true){
          let age = 30; // this is not a root variable
            console.log('inside a block scope', age);  // the age do not display the root variable but the variable within
          }
        
      console.log('displays',  age); // displays the root variable, since the new variable is already run in it if code block




                    // Functions and Methods
   const person = function () {} // regular function
   const person = () => { return <p> I am {props.name} of the age {props.age} from California state <p> }; // this is an arrow function


   // NB: JavaScript are components that can be used to build a component and export
   /* function declaration */
     function merhn() {
          console.log('wassup');
        }

      great(); // calling or invoking a function is a way of calling the function to work

    /* function expression */
   var nice = function(){
      console.log('some nice day');
        };  // function expressions ends with a semicolon
            // JS doesn't support hoisting in function expression

        nice(); // calling the expression function

    /* parsing values into function arguments and parameters */
      const speak = function(name) {
              console.log(`good ${(name)}`);
            };  
           speak();    // displays nothing, since argument is not defined
           speak(manuel);  // the arguments value represents the parameter 'name', displaying manuel rather not name
      
       const speak = function(name = 'manuel', life = 'coding') {
              console.log(`good ${name} ${life}`);
            };  
           speak();  // now displays with no arguments, bcos values are assigned to the local variables

       /* returning values: the opposite of 'console.log()' */
          var jj = function(){
                return = 3.14 * radius**2;

               let bb = 3.14 * radius**2; // can give it a variable
               return bb;
             };

       /* arrow functions */ 
      const ioi = () => {'some arrow functions be oo'};
            console.log(ioi);

      const jgrut = () => {return 'yellow flower'};
             const final = jgrut();
             console.log(final);
                        // NB: huge difference b/n  regular and arrow functions is due to "this." keyword

       /* NB: Methods are other form of functions but are different bcos
             - the way they are called
             - where they are issued 
             - are inbuilt event keyword
        e.g: lavan.toUpperCase();
             var lla = lavan.toUpperCase(); // can assign a variable to a method
             - can write functions in a method, as the method arguments
        
       /* callbacks and foreach */
         const myFunc = (callbackFunc) => {
            let value = 50;
            callbackfunc(value);
        };

         myFunc(function(value) {
                   console.log(value);
                });  // a function inside a method

    
                  

                         // Objects and objects literals


    /* Objects in javascript have "properties" and things "they can do(methods)" 
       we also have built in objects
     */

  /* creating of an object (object literal notation) */
  let user = {     // the "let" key word setsup our object and the "user" serves as a variable
       name: 'crystal',
       age: 30,
       email: 'yawmanuelfestive@gmail.com,
       location: 'Accra',
       blogs: ['A JS pro', 'Newman']
     }; // created objects ends with a semicolon

     let user = {     // the "let" key word setsup our object and the "user" serves as a variable
       name: 'crystal',
       age: 30,
       email: 'yawmanuelfestive@gmail.com,
       location: 'Accra',
       blogs: ['A JS pro', 'Newman']
       login: function(){    // the "login" word is a method
           console.log('the  user logged in');
        },   // an object property name as a method with it value as a function
       logout: function(){
            console.log('the user logged out');
        } 

         logout: (){  // shorthand way of writing a function with a method
            console.log('the user logged out');
        } 
      }; 

   console.log(user); // calling out the created objects
   console.log(user.name); // calling out the user name only

    user.email = "fest"; // updating object properties

    /* the 'this' keyword 
      - good to use with a regular function to refer to the actual object properties and value you defined
      - can use with an arrow function too, but it displays the global window object rather
      - the 'this' keyword is a context 'object' and it represent the context (object, functions, window etc) the this keyword is in
     
    */
   
     let user = {     // the "let" key word setsup our object and the "user" serves as a variable
       name: 'crystal',
       age: 30,
       email: 'yawmanuelfestive@gmail.com,
       location: 'Accra',
       blogs: ['A JS pro', 'Newman']
       login: function(){    // the "login" word is a method
           console.log('the  user logged in');
        },   // an object property name as a method with it value as a function
       logout: function(){
            console.log('the user logged out');  // using normal functn for the this keyword displays the user defined object
    
          this.blogs  // accesses or displays  the value of the array property: blogs
          console.log(this);  // displays the whole content in the 'user' objects when run
          console.log(this.blogs);  // displays the blogs property of the 'user' objects

        }; 
        
            user.logblogs();
            console.log(this); 

  /* creating objects inside arrays */
  const blogs = [ { title: yaw manuel, likes: 30},
            {title: 'Kwesin man, likes: 38},
            (title: 'germ, likes: 98}
           ];  // retrieving data from a database are in a format of objects in an array

  /* Accessing already made objects */
   e.g: by typing: console.log(Math); // then runnig this raw on a browser will display already made objects
     console.log(Math.PI);
     console.log(Math.E); // examples of already made objects extensions
     
     const area = 7.7;
    console.log(Math.round(area)); // rounds up the area 7.7 to 8.0 when you run it
    console.log(Math.round(area * 100));

  /* primitive types and reference types */
   
   /* primitive types are = null, undefined, boolean,  strings, numbers, symbols
      reference types are all (objects) = functions, object literals, arrays, dates and all other objects
    */

      const userOne = { name: 'zzz', number: 90 );
      const userTwo = userOne; // displays the same content in user one

           console.log(userOne, userTwo);  // both displays the same content

      userOne.name = 'orderr';  // userOne value don't only change but userTwo value too changes
      console.log(userOne, userTwo);  // display 'orderr' as the value for both userOne and userTwo thou userTwo was not change
  

                // Classes
/* Classes are blueprint from which individual objects are created 
 * Classes provide much simpler and clear synthax to create objects and deal with inheritance  
 */

  /** Class declaration **/

    class Person {
        constructor(name, year_born) {
             this.name = name;
             this.year_born - year_born;
          } 
     }


  /** Class expression **/

  // unnamed class expression

      var jjra = class {
 
    }; //class expressions also ends with semicolon


  // named class expressipion

      var jjra = class Person {

      };
   
                 // Document Object Module (DOM): the DOM manipulation and DOM interactivity templates
      
  // changing of text of a tag or html
const dp = document.querySelector('.pointer2');
  dp.innerText += 'just awesome';  // the += appends or adds on to the main text of the element

  // changing of a html 
const doable = document.querySelector('.pointer2');
      doable.innerHTML = '<h1> there are a whole lot of goodies in coding </h1>';
 
  // changing of attributes of html
const ko = document.querySelector('a');
console.log(ko.getAttribute('href'));
ko.setAttribute('class', 'neatGoals');
ko.setAttribute('style', 'color: red');

const mon = document.querySelector('.pointer');
mon.style.fontSize = '40px';  // using CSS in JS
mon.style.color = 'orange';  

  // adding and removing of class through javascript
  const cont = document.querySelector('p');

  console.log(cont.classList);
  cont.classList.add('error');
  cont.classList.remove('error');
  cont.classList.add('success');


  // Looping through sentence with the lookup word and call upon
  const paras = document.querySelectorAll('p');

  paras.forEach(p => {
    if (p.textContent.includes('error')) {  // the '.includes' loops through to find sentence with the word error
      p.classList.add('error');
    }
    if (p.innerText.includes('success')){
      p.classList.add('success');
    }
  });

  const title = document.querySelector('.title');

  title.classList.toggle('test');
  title.classList.toggle('test');



    // form validation 
 var email = document.getElementById('email');
 var password = document.getElementById('password');

     // validate 
 if ( (email.value.length > 0) && (password.value.length > 0) ) { 
      return true;
     } else { 
           alert('please complete the form');
           return false;
     }

     // End of validationForm() function
 if (document && document.getElementById) {
      var loginForm = document.getElementById('loginForm');
      loginForm.onsubmit = validationForm;

     // Event listener to window's load event
     window.onload = init;

 

   *= -= += %= !==  \\|| |\|| !==: means not identical to && !=: means not equal to

    // just testing, not serious 
 if ( mangoes || oranges ).new vegetables {
     console.log ( "I love fruits" );
      }
















