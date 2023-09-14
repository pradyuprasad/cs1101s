/*function tree_sum(l) {
    if (is_null(l)) {
        return 0;
    }
    else if (is_list(head(l))) {
        return tree_sum(head(l)) + tree_sum(tail(l));
    }
    
    else {
        return head(l) + tree_sum(tail(l));
    }
}
*/
const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));

function accumulate_tree(f, op, init, tree) {
    
    return accumulate((x1, wish) => is_list(x1) 
    ? accumulate_tree(f, op, wish, x1) 
    : op(f(x1), wish), 
    init, 
    tree);
}
function tree_sum2(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

tree_sum2(my_tree);

