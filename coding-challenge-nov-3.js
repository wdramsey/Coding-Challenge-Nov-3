
//Magic Index: A magic index in an array A [ 0 ... n -1] is defined to 
// be an index such that A[i] = i. Given a sorted array of distinct integers, 
// write a method to find a magic index, if one exists, in array A.

// Follow up: What if the values are not distinct?

//This way, it does not matter if the values are distinct, and if there are 
//multiple magic indices
const magicIndex = (A) => {
    let ans = [];
    for (let i = 0; i < A.length; i++) {
        if (i == A[i]) ans.push(i);
    }
    return ans;
}


//Power Set: Write a method to return all subsets of a set.

const powerSet = (inputSet) => {
    if (inputSet.length == 0) {
        return [[]];
    }
    const firstSet = inputSet[0];
    const restOfSets = inputSet.slice(1);

    const subsetsWithoutFirstSet = powerSet(restOfSets);
    const subsetsWithFirstSet = subsetsWithoutFirstSet.map(subset => [firstSet, ...subset]);
    return subsetsWithoutFirstSet.concat(subsetsWithFirstSet);
}

// Recursive Multiply: Write a recursive function to multiply two positive 
// integers without using the *operator. You can use addition, 
// subtraction, and bit shifting, but you should minimize the number 
// of those operations.

const recursiveMultiply = (a, b) => {
    if (b == 0) {
        return 0;
    } else {
        return a + recursiveMultiply(a, b - 1);
    }
}