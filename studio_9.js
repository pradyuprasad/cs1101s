function d_filter(pred, xs) {
    if (is_null(xs)) {
        // do nothing
    }
    else {
                if (pred(head(xs))) {
            set_tail(xs, d_filter(pred, tail(xs)));
        }
        else {
            d_filter(pred, tail(xs));
        }

        }
    
    
}




const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L;