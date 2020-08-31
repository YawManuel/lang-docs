//  Java 8

// importation of packages, files and other components

package java.firstApp.yamManuel;

import java.io.IOException;
import java.swing.listbox;
import org.junit.Test;

import static org.junit.assert.*; // static imports keyword focuses on all the static methods of assert
 /* JDK(java development kit) and JRE(java runtime environment. JRE updates periodically)
  * jdk and jre must be install before you can code and run java programms
  */

import java.util.Scanner;

public class JavaSweet { // for readability, is good to indent everything inside a curly braces
  public static void main(String[] args) { // the main is a method that run the app
    System.out.println("Hello there!");
    return;  // the return keyword returns an operation and ends the operation from continuing running

    var y = new JavaSweet(); // this is creating an object, method signatures are the structures of a method
    y.label();

  }

  public void label() {
        System.out.println("labeled glowing gems"); 
        
  // variables
    boolean kofi = true;  // takes only the logic word: true/false
    byte lo = 'C';  // stores characters and very small range of numbers
    char koko = rty;  // takes characters 
    short ui = -10;   // takes lower numbers of 8 bits
    int i = 45;  // takes normall integers
    long l = 54654764;  // stores long numbers

    float uul =  12.4;  // stores lower decimal numbers
    double ulu = 80.00;  // store higher decimal numbers

    final int n = 3;  // constants variables are created in java by adding the keyword 'final'
  
  // string literals
  String literature = new String("A java holiday!");  // can't use single quote to define a string, they are use for characters
  String holiday = "A java Christmas" + " " + literature;

  System.out.println(holiday);

  public void shouldFeedAllAnimals() {
Zoo zoo = new Zoo();

// how an array is written in java //
Animal[] animals = { new Dog(), new Gorilla(), new Lion(), new Tiger(),};
zoo.feedingAnimals(animals);   

}

  // common properties of java
       System.out.println(Integer.MIN_VALUE);  // there are 'properties' for each data types. e.g: String, Integer, Char, Int properties etc. 
  
   // common methods of  java

        String tru = "blablablarus";
        System.out.println(tru.length());   // there are 'methods' for each data types. e.g: String, Integer, Char, Int methods etc
        
        String x = "Heavens made of apparamade\n";  // the '\n ' makes the sentence to start on a new line when run
        System.out.println(x.repeat(309));

        String password = "stranger";
        System.out.println("Jayman, what's the password?");
        Scanner x = new Scanner(System.in);
        String  y = x.nextLine();
        System.out.println(password.equals(y));
  
// usse of utils e.g Scanner
  public static void main(String[] args) { // the main is a method that run the app
    System.out.println("How is your day");
    // input
    Scanner scanner = new Scanner(System.in);
    String name = scanner.nextLine();
    System.out.println("Great" + " " +  name);
  }

/** learn the various types of java methods at the oracle website. e.g: finalize, clone etc... **/
/** annotations are meta information for the compiler **/

 // classes in java
public class yawManuel {

public static void main(string[] arguments) throws Exception {

CarService carService = new CarService();  
for (String arguments : arguments); { carService.process(arguments);
         }               
     } 
  }

public class yawManuel {

public static void main(string[] arguments) throws Exception {

CarService carService = new CarService();  
for (String arguments : arguments); { carService.process(arguments);
         }               
     } 
  }

 /** the use of inheritance "extends" is the key word we write for inheritance**/

public class Lion extends Animal implements

// operators

                       // Binary operators: works on two operand
                       // uniary operator: works on one operand
                       // turnary operator: works on three operand
                       
// classes: calling classes in another class


// conditioanl statements: if and switch statements


// The three core of object oriented programming: emcapsulation, inheritance and polymorphism
 /* encapsulation: hiding the inner details of something  */


  /**
 *  The Graphical Interface of java programming
 **/

import javax.swing.*;

// puclic static void main(String[] args){
JFrame gui = new JFrame( " i love java ");
 gui.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 gui.setSize(230, 280);
 gui.setVisible(true);
  }
}

// private way of stating variables
private byte mybyte;
private short myshort;
private long myLong;
private float myFloat;
private double myDouble;
private object myObject;
private boolean myBoolean;
private char myChar;

