// question 1

function merge_sort(A) {
    merge_sort_helper(A, 0, array_length(A) - 1);
}
function merge_sort_helper(A, low, high) {
    if (low < high) {
        const mid = math_floor((low + high) / 2);
        merge_sort_helper(A, low, mid);
        merge_sort_helper(A, mid + 1, high);
        merge(A, low, mid, high);
    }
}

function merge(A, low, mid, high) {
    const B = []; // temporary array
    let left = low;
    let right = mid + 1;
    let Bidx = 0;
    while (left <= mid && right <= high) {
        if (A[left] <= A[right]) {
            B[Bidx] = A[left];
            left = left + 1;
        } 
        else {
            B[Bidx] = A[right];
            right = right + 1;
        }
        Bidx = Bidx + 1;
    }

    while (left <= mid) {
        B[Bidx] = A[left];
        Bidx = Bidx + 1;
        left = left + 1;
    }
    while (right <= high) {
        B[Bidx] = A[right];
        Bidx = Bidx + 1;
        right = right + 1;
    }
    for (let k = 0; k < high - low + 1; k = k + 1) {
        A[low + k] = B[k];
    }
}



function make_optimized_search(A) {
    let B = [];
    const len = array_length(A);
    for (let i = 0; i < len; i = i + 1){
        B[i] = A[i];
    } // make copy of A. waste of space because they don't let us modify A
    
    
    merge_sort(B);
    
    function binary_search(A, val) {
        
        function search(low, high) {
            
            if (low > high) {
                return false; 
            }
            
            else {
                const mid = math_floor((low+high)/2);
                return A[mid] === val || 
                (A[mid] < val ? search(mid+1, high) 
                : search(low, mid-1));
            }
        }
    }
    
    
    return x => binary_search(B, x);
}




// question 2

// part a



function find_fibs(n) {
    let fibs = [0, 1];
    
        for (let i = 2; i <=n; i = i + 1) {
            fibs[i] = fibs[i-1] + fibs[i-2];
            
        }
        
        return fibs[n];
    }
    


const a = find_fibs(500);


// part b

function fibs_optimized(n){
    if (n <= 1) {
        return n;
    }
    
    let a = 0;
    let b = 1;
    for (let i = 2; i <=n; i = i + 1) {
        b = a +b;
        a = b-a;
    }
    
    return b;
}

//fibs_optimized(10);

// Question 3

const mem = [];
function read(n, k) {
return mem[n] === undefined
? undefined
: mem[n][k];
}
function write(n, k, value) {
if (mem[n] === undefined) {
mem[n] = [];
}
mem[n][k] = value;
}

function mchoose(n, k) {
if (read(n, k) !== undefined) {
return read(n, k);
} else {
const result = k > n
? 0
: k === 0 || k === n
? 1
: mchoose(n - 1, k) + mchoose(n - 1, k - 1);
write(n, k, result);
return result;
}
}

