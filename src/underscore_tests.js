/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  
  _.first = function(array, n) {
    var newArray = [];
    if (n !== undefined) {
      for (var i = 0; i < n; i++) {
        if (array[i]){
          newArray.push(array[i]);
          }
        }
    return newArray;
    }
    else {
      return array[0];
    }
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  
  _.last = function(array, n) {
    if (n !== undefined) {
      array.splice(0, array.length-n);
      return array;
    }
    else {
      return array[array.length-1];
    }
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    if (Array.isArray(collection) === true) {
      collection.forEach (iterator);
    }
    else {
      for (var prop in collection) {
        iterator(collection[prop], prop, collection);
      }
    }  
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  };

  // Return all elements of an array that pass a truth test.
  
  //(Plug collection into iterator and test if true or false.)
  _.filter = function(collection, iterator) {
    var newArray = [];
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i]);
      if(iterator(collection[i])) {
       newArray.push(collection[i]);
      }
    }
    return newArray;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, iterator) {
    var newArray = [];
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i]);
      if(!iterator(collection[i])) {
       newArray.push(collection[i]);
      }
    }
    return newArray;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
     if (array.indexOf(array[i]) === i) {
       newArray.push(array[i]); 
     }
    }  
    return newArray;
  };
 
  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(iterator(array[i]));
    }
    return newArray;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  //array = [
  // {age: 27,
  //  name: "Erin"
  // },
  //   {
  //     someone else,
  //   }
 // ]
 
 _.pluck = function(array, propertyName) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      for (var key in array[i]) {
        if (key === propertyName) {
        newArray.push(array[i][propertyName]);
        }
      }
    } 
    return newArray;
  }; 

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
    
    if (typeof methodName === "string") {
      for (var i = 0; i < list.length; i++) {
        list[i][methodName](args);
      }
    }
    
    else if (typeof methodName === "function") {
      for (var i = 0; i < list.length; i++) {
      methodName.call(list[i]);
      }
    }
    return list;
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  
  // [1, 2, 3], callback, 0
  
  /*initial value =p 0,    i = 0    item = 1        total = 1
                  p = 1    i = 1    item = 2          total = 3
                  p = 3    i = 2    item = 3          total = 6
                  p = 6    i = 3    item = undefined
  
  */
  

  
  _.reduce = function(collection, iterator, initialValue) {
    
    if (initialValue) {
    var previousValue = initialValue;
    }
    else {
      previousValue = 0;
    }
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      previousValue = iterator(previousValue, item);
     }
    return previousValue;
    
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    
      for (var key in collection) {
        if (collection[key] === target) {
          return true;
        }
      }
    return false;
  };


  // Determine whether all of the elements match a truth test.
  
  
  // _.every = function(collection, iterator) {
  //   for (var key in collection) { function (iterator) {
  //     iterator();
  //     }
  //   }
  //   return iterator();
    
  // };




  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  
  
  
  // _.some = function(collection, iterator) {
  //   iterator = (iterator === undefined) ? (function () {
  //     if (collection);
  //   }) : iterator;
    
  //   for (var key in collection) { function (iterator) {
      
  //     iterator();
  //     }
  //   }
    
    
    
  // };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  
  
  // _.extend = function(obj) {
  //   var newObj = {};
  //   for (var key in obj) {
  //     obj[key] = newObj[key];  
  //   } 
  
  // };
  

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    
    var counter = 0;
    
    if (counter === 0) {
      var result = func;
      counter = 1;
    } 
    
    else {
       return result;
     }
      
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
     
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  // _.zip = function(a, b, c) {
  //  var newArray = []; 
  //  var alength = a.length;
  //  var blength = b.length;
  //  var clength = c.length;
  //  var longest;
   
  //  if (alength > blength && alength > clength) {
  //    longest = a;
  //  }
   
  //  else if (blength > alength && blength > clength) {
  //    longest = b;
  //  }
   
  //  else {
  //    longest = c;
  //  }
   
  //  for (var i = 0; i < longest.length; i++) {
  //  newArray.push([a[i], b[i], c[i]]);
  //  } 
  //  return(newArray);
  // };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function () {


    var firstArray = [];
    var finalArray = [];
    for (var i = 0; i < arguments.length; i++) {
      for (var item in arguments[i]) {
        firstArray.push(arguments[i][item]);
      }
    }
    for (var j = 0; j < firstArray.length; j++) {
      if (firstArray.indexOf(firstArray[j]) !== j) {
        finalArray.push(firstArray[j]);
      }
    }

    return finalArray;

  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    
    
    
    
    
    
  };

}).call(this);
