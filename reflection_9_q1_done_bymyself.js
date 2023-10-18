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







