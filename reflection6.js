function insert_cmp(x, xs, cmp) {
    return is_null(xs) 
           ? list(x)
           : cmp(x, head(xs)) 
           ? pair(x, xs)
           : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) {
    return is_null(xs) 
           ? xs
           : insert_cmp(head(xs), 
                        insertion_sort_cmp(tail(xs), cmp),
                        cmp);
}

// Test
const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);
//const xs = list(6,3,8);
// (a)
//insertion_sort_cmp(xs, (x, y) => x <= y);
// Result: list(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)

// (b)
insertion_sort_cmp(xs, (x, y) => y <= x);
// Result: list(9, 8, 7, 6, 6, 5, 4, 3, 2, 1)

// (c)
insertion_sort_cmp(xs, (x, y) =>  false);
// Result: list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6)

// (d)

const even_first_and_sorted_cmp = (x, y) => {
  if (x % 2 === 0 && y % 2 !== 0) {
    return true;
  }
  else if (x % 2 !== 0 && y % 2 === 0) {
    return false;
  }
  else if (x % 2 === 0 && y % 2 === 0) {
    return x <= y;
  }
  else {
    return y <= x;
  }
};

insertion_sort_cmp(xs, even_first_and_sorted_cmp);
// Result: list(2, 4, 6, 6, 8, 9, 7, 5, 3, 1)

/*

// Question 2

Consider the partial implementation of merge_sort shown in class:
// half, rounded downwards
function middle(n) {
return math_floor(n / 2);
}
// put the first n elements of xs into a list
function take(xs, n) {
// ...
}
// drop the first n elements from the list and return the rest
function drop(xs, n) {
// ...
}
// merge two sorted lists into one sorted list
function merge(xs, ys) {
if (is_null(xs)) {
return ys;
} else if (is_null(ys)) {
return xs;
} else {
const x = head(xs);
const y = head(ys);
return x < y
? pair(x, merge(tail(xs), ys))
: pair(y, merge(xs, tail(ys)));
}
}
function merge_sort(xs) {
if (is_null(xs) || is_null(tail(xs))) {
return xs;
} else {
const mid = middle(length(xs));
return merge(merge_sort(take(xs, mid)),
merge_sort(drop(xs, mid)));
}
}
CS1101S, Semester I, 2023/2024 — R6 3 / 3
(a) Use big-O, Θ or Ω notation to characterize the running time of function merge, for the
input lists xs and ys of the same length n.
(b) Given the running time of the functions middle, take and drop have the following
orders of growth:
• middle — Θ(1)
• take — Θ(n), where n is the value of the argument n
• drop — Θ(n), where n is the value of the argument n
Characterize the running time of merge_sort, using the big-O, Θ or Ω notation.


*/


/*
complexity of merge is O(n).

Complexity of merge_sort is O(n) *O(logn) = O(nlogn)
*/

function take(xs, n) {
    return n === 0 ? null : pair(head(xs), take(tail(xs), n-1));
}

// Homework: sort it with odd even alternating. odd numbers are ascneding and even are descending