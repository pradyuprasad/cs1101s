// Question 1
function map(f, sequence) {
    return accumulate((x, y) => pair(f(x), y),
                      null, 
                      sequence);
}


map(x => 2*x, list(1, 2, 3));



// Question 2
function checkif(item, l) {
    return !is_null(filter(x => x === item , l));
}

checkif(1, list(1, 2, 3));

/*

list(1, 2, 2, 3);

function a(list) {
    for each i in list, check if i is in the previous elements of the lst
    if it is not in the previous elements, then add it to the new list
}

*/

const l = list("a", "a", "b");


//filter( x => checkif(x, l), l );
function helper(init, test) {
    // init = head of the list you want to check
    // test = the tail of list you want to check
    // always declare a(list(head(l)), tail(l))
    // the parent function should have checked for l being null
    // so head can't be null
    // check for tail being null
    
    if (is_null(test)) {
        return init;
    }
    
    else {
        // check if the head(test) is in init
        // if it is, skip and return helper(init, tail(test))
        // if it isn't return helper(append(init, list(head(test))), tail(test))
        return checkif(head(test), init) ? helper(init, tail(test))
        : helper( append(init, list(head(test))), tail(test) );
       
    }
}
function remove_duplicates(l) {
    return is_null(l) ? null : helper(list(head(l)), tail(l));
}

remove_duplicates(l);


// Question 3

function makeup_amount(x, coins) {
if (x === 0) {
return list(null);
} else if (x < 0 || is_null(coins)) {
return null;
} else {
// Combinations that do not use the head coin.
const combi_A = makeup_amount(x, tail(coins) );
// Combinations that do not use the head coin
// for the remaining amount.
const combi_B = makeup_amount(x - head(coins), tail(coins) );
// Combinations that use the head coin.
const combi_C = makeup_amount(x, head(coins));
return append(combi_A, combi_C);
}
}
makeup_amount()





