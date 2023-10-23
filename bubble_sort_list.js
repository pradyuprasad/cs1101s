
const LL = list(3, 5, 2, 4, 1);

function headn(L, n){
    if (n === 0) {
        return head(L);
    }
    
    else {
        return headn(tail(L), n-1);
    }
}

function tailn(L, n) {
    if (n === 0) {
        return L;
    }
        
    else {
        return tailn(tail(L), n-1);
    }
}

function set_nth_head(L, n, value) {
    return set_head(tailn(L, n),value);
}


function swap(L, i, j) {
    const temp = headn(L, i);
    set_nth_head(L, i, headn(L, j));
    set_nth_head(L, j, temp);
    
}

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len -1; i >= 1; i = i -1) {
        for (let j = 0; j < i; j = j + 1) {
            if(headn(L, j) > headn(L, j+1)) {
                swap(L, j, j+1);
            }
        }
    }
}


bubblesort_list(L);
L;
