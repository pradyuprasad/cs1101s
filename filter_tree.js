


function filter_tree(pred, tree) {
    if (is_null(tree)) {
        return tree;
    }
    else if (is_list(head(tree)) && !is_null(head(tree))) {
        return pair(filter_tree(pred, 
        head(tree)), 
        filter_tree(pred, 
        tail(tree)));
    }
    
    else if (is_null(head(tree))) {
        return filter_tree(pred, tail(tree));
    }
    
    else {
        return pred(head(tree)) ? pair(head(tree), 
        filter_tree(pred, tail(tree))) 
        : filter_tree(pred, tail(tree));
    }
}

function filter_tree_empty(pred, tree) {
    return filter_tree(x => !is_null(tree), 
    filter_tree(pred, tree));
}

const tree = list(list(1, list(-5), 3),2,3);
const clean = filter_tree_empty(x => x !== -5, tree);
display(clean);

