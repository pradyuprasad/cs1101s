// Question 2

function subsets(xs) {
    // power sets = list of 1. empty, 2. all the elements as one list 
    // 3. pick one out of n, 4. pick 2 out of n ... till we pick n out of n
    return list(list(),  xs);
    
}


function pickn(input, n) {
    // from input find all combinations of n elements
    return 0;
}

const xs = list(1,2,3);
//pickn(xs, length(xs)-1);


// Question 3

const l = list(1,2);

// take the first item. permute the rest of the items
function permute(input) {
    if (length(input) === 2) {
        return list(list(head(input), head(tail(input))), 
        list(head(tail(input)),head(input)));
    }
    
    else {
        return pair(head(input), permute(tail(input)));
    }
    
}

list(head(tail(l)), head(l));
// permute(list(1,2,3))
// pair(1, permute(list(2,3)))
// pair(1, pair(2, permute(list(3))));
// when len(input) == 2 return BOTH combinations?