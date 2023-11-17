mean = (array) => array.reduce((a, b) => a + b) / array.length;


module.exports = { mean };

// Other ways to export a module
// module.exports = {
    //     mean:(array) => array.reduce((a,b) => a+b)/array.length
    //   };
    
    
// console.log(mean([1,2,3,4,5,6,7,8,9,10]))