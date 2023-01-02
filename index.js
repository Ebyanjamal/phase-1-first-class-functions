function  receivesAFunction(callback){
    return callback();
};

  function returnsANamedFunction() {
    return function named() {
      console.log("hello")
    }
  }
  

  function returnsAnAnonymousFunction() {
    return function() {
        console.log("yes")
    }
  };