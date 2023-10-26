// reflection 10

function zip_stream(s1, s2) {
    return pair(head(s1), () => zip_stream(s2, stream_tail(s1)));
}

const s1 = integers_from(1);
const s2 = s1;
const s3 = integers_from(100);

function zip_list_of_streams(L) {
    return pair(head(head(L)), () => zip_list_of_streams(append(tail(L), 
    list(stream_tail(head(L))))));
}

const L = list(s1, s2, s3);

const s4 = zip_list_of_streams(L);

eval_stream(s4, 5);

function add_streams(s1, s2) {
return is_null(s1)
? s2
: is_null(s2)
? s1
: pair(head(s1) + head(s2),
() => add_streams(stream_tail(s1),
stream_tail(s2)));
}

