# python is an OOPs language, that can be mainly used for:
# - data analyses programms 
# - machine learning programms
# - mobile/desktop apps by using frameworks supported by python
#  NB: effective execution in python depends alot on "Indentation", especially on "if and for statements"
# mixing tabs and spaces can give you "indentation error" even if everything in your code is cool

x = 5
if x < 10:
   print('smaller')
if x > 20:
   print('bigger') 

print('finish')

# variables, expressions, and statements
 
nam = input('Tell me something sweet python') # input() is a function that prints out given input
print(nam)

566                     # constants in python, NB: with python constants: strings, boolean, float and double are defined the same as the int is defined
y = 5                   # variables in python
y = 5 * 5 + (445 %  3)  # variable expressions

# conditional  statememts
y = 6
if y < 10:
   print('smaller')  # in python, if statements are written this way

x = 42
if x > 1 :
     print('More than one')
     if x < 100 :
           print('less than 100')
print('All done')  # an example of 'if' nested decisons (on way decision)

x = 4
if x > 2 :
    print('Bigger')
else :
    Print('smaller')

print ('All done')  # an example of 'if else' decisions (two way decision)


x = 20
if x < 20:
    print('small')
elif x >= 10:
    print('medium')
else:
    print('Large')
print('Am all done')  # multi-way decision 


user = input ('Enter a nunber:')
try:
      ttutu = int (idntknwwatamdoing)
except:
      ullio = -1
      
if  ullio > 0:
      print('Nice work bro')
else:
      print('Not a good number Mr. man')   # an example of 'try' and 'except'


 #functions

 def greetMan(lang):                 #'def' means: 'define function'... use to state a function
    if lang == 'es':
        print('Hello! Mr. English')
    elif lang == 'fr':
        print('Bonjour! Monsieour')
    else:
        print('Hello! pals')

greetMan('en')       #functions help us to store and reuse a block of codes, to prevent us from repeating ourselves
greetMan('es')       # a  function that doesnot return a value is called 'void function'    
greetMan('fr')       # functions that returns values are called 'fruitfull function'   


# Loops and Iterations ( this is where we are able to tell the computer to do things alot, as we sit back and drink coffee)
# Indefinite Loops (while loops)

                             # repeated Loops

  
                             # infinite Loops


                             # Zero trip 
                             
                             # 'break/continue' keyword for escaping or terminating an indefinite loop
        
 # Definite Loops (for looops)

  for time in [0,9,8] :
      print(time)      