function () {

}

;

function () {} === function () {};

/// Each new function is not identical to a previous function even if it contains the same  instructions

undefined === undefined
/// True
(function () {})() === (function () {})()
/// true
(function () {})() === undefined

/// Undefined = I don't have a value but it is a value in and of itself

void 0
void 1
void (2 + 2)
/// All undefined - the purpose of the void operator

(function () {
       1 + 1; 
       2 + 2 
     })
     
     (function () { 
       (function () { 
         (function () { 
           (function () {
          }) 
        }) 
      }); 
      (function () {
      }) 
})

// Return operator returns a value

function () {return 'Hello ' + 'World '};

// Hello world with a function return statement

function () {
    return (function () {
        return true
    })
};

//Function that gives a function that returns true - nested

// ** COMPOSITION ** \\

function cookAndEat (food) {
  return (cook(food));
}

function compose (a, b) {
  return function (c) {
    return a(b(c));
  }
}

let cookAndEat = compose(eat, cook);

// Functions are values that can be part of expressions, returned from other functions, and so forth.
// Functions are reference values.
// Functions are applied to arguments.
// The arguments are passed by sharing, which is also called “pass by value.”
// Function bodies have zero or more expressions.
// Function application evaluates whatever is returned with the return keyword, or to undefined.
// Function application creates a scope. Scopes are nested and free variable references closed over.
// Variables can shadow variables in an enclosing scope.
// let is an idiom where we create a function and call it immediately in order to bind values to names.
// JavaScript uses var to bind variables within a function’s scope.