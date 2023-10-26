function integers_from(n) {
return pair(n, () => integers_from(n + 1));
}

const s1 = integers_from(1);
const s2 = integers_from(20);
const s3 = integers_from(30);

const L = list(s1, s2, s3);

function zip_streams(L) {
    const len = length(L); 
    
    function helper(L, counter) {
        const current_item = list_ref(L, counter);
        const new_L = map(x => x === current_item ? stream_tail(x) : x,
        L);
        
        return pair(head(current_item), 
        () => helper(new_L, (counter +1) % len));
    }
    
    return helper(L, 0);
}

const k = zip_streams(L);
eval_stream(k, 9);

function add_streams(s1, s2) {
    return is_null(s1)
    ? s2
    : is_null(s2)
    ? s1
    : pair(head(s1) + head(s2),
    () => add_streams(stream_tail(s1),
    stream_tail(s2)));
}

function partial_sums(s) {
    
    return pair(head(s), () => add_streams(partial_sums(s), (stream_tail(s))));
}

//const l = partial_sums(s1);
//eval_stream(l, 10);
