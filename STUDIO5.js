function second(l) {
    if (is_null(l) || length(l) === 1) {
        return null;
    }
    
    else {
        
            return pair(head(tail(l)), second(tail(tail(l))));

        
    }
}

const l = list(1, 2);

function sum(list) {
    function helper(list, total) {
        return is_null((list)) ? total : helper(tail(list), total+head(list));
    }
    
    return helper(list, 0);
    
}


function sum_even(list) {
    return sum(second(list));
}

function sum_odd(list) {
    return sum(list) - sum_even(list);
}


const input = list(1, 2, 3, 4, 5);

const even_sum = sum_even(input);
const odd_sum = sum_odd(input);
//list(odd_sum, even_sum);

function sums(l) {
    const even_sum = sum_even(l);
    const odd_sum = sum_odd(l);
    return list(even_sum, odd_sum);
}

sums(list(1, 2, 3, 4, 5));