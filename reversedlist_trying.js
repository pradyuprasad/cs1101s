const lst = pair(1, pair(2, null));
// answer = pair(2, pair(1, null))
// l2 = pair(1, pair(2, pair(3, null)))
// rev(l2) = pair(3, pair(2, pair(1, null))


function rev(l) {
    if(is_null(l)) {
        return null;
    }
    else {
        
        pair(head(tail(l)), tail((l)));
        
    }
}


rev(lst);