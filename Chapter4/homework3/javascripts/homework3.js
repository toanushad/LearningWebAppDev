var main = function() {
    "use strict";
    
    // Satic input
    var nums = [ 2, 3, 5, 7, 8, 9, 2, 3, 2];
    var stringArray = ["hello", "a","a","world", "a","c","a","b"];

    exercise1(nums);
    exercise2(nums);
    exercise2Underscore(nums);
    exercise3(nums);
    exercise3Underscore(nums);
    exercise4(nums);
    exercise4Underscore(nums);
    arrayContains(stringArray, "hello");
    arrayContainsTwo(stringArray, "a");
    arrayContainsThree(stringArray, "b");
    arrayContainsN(stringArray, "a",4);
};    

//Average of given numbers
var exercise1 = function(nums){
    var i,sum = 0,len = nums.length;
    for(i = 0; i < len;i++){
        sum = sum+nums[i];
    }
    var avg = sum/len;
    var $newPElementForExercise1 = $("<p>");
    $newPElementForExercise1.text(avg);
    $(".average").append($newPElementForExercise1);
};

//Largest number in an array
var exercise2 = function(nums){
    var i,large = nums[0],len = nums.length;
    for(i = 1; i < len; i++){
        if(nums[i] > large){
            large = nums[i];
        }
    }
    var $newPElementForExercise2 = $("<p>");
    $newPElementForExercise2.text(large);
    $(".largestNo").append($newPElementForExercise2);
};

//Using underscore.js for finding maximum number in an array

var exercise2Underscore = function(nums){
    var theLargest = _.max(nums);
    var $newPElementUnderscore1 = $("<p>").text(theLargest);
   // alert(theLargest);
    $(".exercise2WithUnderscore").append($newPElementUnderscore1);

};

//Find atleast one even number
var exercise3 = function(nums){
    var i,len = nums.length,x = false;
    for(i = 0; i < len; i++){
        if((nums[i] % 2) === 0){
            x = true;
        }
    }
    var $newPElementForExercise3 = $("<p>");
    $newPElementForExercise3.text(x);
    $(".oneEvenNo").append($newPElementForExercise3);
};

// Using underscore.js for finding atleast one even number 
var exercise3Underscore = function(nums){
   var underScore3 = _.some(nums,function(nums){ return nums % 2 === 0}, true);
    //alert(underScore3);
    var $newPElementUnderscore2 = $("<p>").text(underScore3);
    $(".exercise3WithUnderscore").append($newPElementUnderscore2);
};

//Find every number in an array is even
var exercise4 = function(nums){
    var i,len = nums.length,allEven = true;
    for(i = 0; i < len; i++){
        if((nums[i] % 2) !== 0){
            allEven = false;
        }
    }
    var $newPElementForExercise4 = $("<p>");
    $newPElementForExercise4.text(allEven);
    $(".allEvenNo").append($newPElementForExercise4);

};

var exercise4Underscore = function(nums){
    var underScore4 = _.every(nums,function(nums){ return nums % 2 === 0}, true);
    var $newPElementUnderscore3 = $("<p>").text(underScore4);
    $(".exercise4WithUnderscore").append($newPElementUnderscore3);
};

// Find a string that contains in an array
var arrayContains = function(myArray, myString){
    var isMyString = false;
    myArray.forEach(function(element){
        if(element === myString){
            isMyString = true;
        }
    });
    var $newPElementForExercise5 = $("<p>");
    $newPElementForExercise5.text(isMyString);
    $(".oneTime").append($newPElementForExercise5);
};

// Finding a string that occured twice in an array
var arrayContainsTwo = function(myArray, myString){
    var myStringOccuredTwice = false, count = 0;
    myArray.forEach(function(element){
        if(element === myString){
            count = count +1;
        }
    });
    if (count >= 2){
        myStringOccuredTwice = true;
    }
    var $newPElementForExercise6 = $("<p>");
    $newPElementForExercise6.text(myStringOccuredTwice);
    $(".twoTimes").append($newPElementForExercise6);
};

// Finding a string that occured three times in an array
var arrayContainsThree = function(myArray, myString){
    var myStringOccured3Times = false, count = 0;
    myArray.forEach(function(element){
        if(element === myString){
            count = count +1;
        }
    });
    if (count >= 3){
        myStringOccured3Times = true;
    }
    var $newPElementForExercise7 = $("<p>");
    $newPElementForExercise7.text(myStringOccured3Times);
    $(".threeTimes").append($newPElementForExercise7);
};

// Finding a string that occured n times in an array
var arrayContainsN = function(myArray, myString, n){
    var myStringOccuredNTimes = false, count = 0;
    myArray.forEach(function(element){
        if(element === myString){
            count = count +1;
        }
    });
    if (count >= n){
        myStringOccuredNTimes = true;
    }
    var $newPElementForExercise8 = $("<p>");
    $newPElementForExercise8.text(myStringOccuredNTimes);
    $(".nTimes").append($newPElementForExercise8);
};
$(document).ready(main);
