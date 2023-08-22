function f(n) {
    return n < 3 
    ? n 
    : f(n-1) + 2*f(n-2) + 3*f(n-3);
}


function f2(n) {
    return n < 3
    ? n
    : f_iter(0, 1, 2, n, 0);
}

function f_iter(nm3, nm2, nm1, final, count) {
    const new_n = 3*nm3 + 2*nm2+nm1;
    return count >= final ? nm3 : f_iter(nm2,nm1, new_n,  final, count+1);
}

function check(n) {
    return f2(n) === f(n);
}
