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

function () {return 'Hello ' + 'World '}