function biggie_size(x) {
    return x+4;
}

function unbiggie_size(x) {
    return x - 4;
}

function is_biggie_size(x) {
    return x >= 5 && x <= 8 ? true: false;
      
}

function combo_price(x) {
    return is_biggie_size(x) ? (x-4)*1.17 + 0.5 : x*1.17;
}

function empty_order() {
    return 0;
}

function add_to_order(x, y) {
    return 10*x + y;
}

function last_combo(x) {
    return x % 10;
}


function other_combos(x) {
    return (x - last_combo(x))/10;
}

other_combos(30000);

