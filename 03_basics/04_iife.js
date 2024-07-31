// Immediately Invoked Function Expressions (IIFE)

// NORMAL Function
function chai(){
    console.log('DB-1 CONNECTED');
}
chai();


// function another_chai(){
//     console.log('DB-2 CONNECTED');
// }
// another_chai(),


// IIFE-- to protect from polution which is produced from global Scope, we use () Over function.
(function another_chai(){
    console.log('DB-2 CONNECTED');
})();


// ARROW FUNCTION
(() => {
    console.log('DB-3 CONNECTED')
})();