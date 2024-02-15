function permutationSort(list) {
    //Check if the list length is less than 1
    if (list.length < 1) { 
        return [0].concat([]); 
    }
    //Get the list of permutations and start go through them and check if they are sorted
    var permutationList = getPermutations(list);
    var i = 0;
    var terminate = false
    while(!terminate) {
        terminate = isSorted(permutationList[i++])
    }
    return ([i].concat(permutationList[i-1]));
}

//Checks if list is sorted
function isSorted(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) { 
            return false; 
        }
    }
    return true;
}

//This function gets the permutations of the list and returns a list of them
function getPermutations(list) {
    if (list.length == 0) { return []; }
    if (list.length == 1) {return [list]; }
    
    //Loop through and find all of the permutations
    var permutationsList = [];
    for(let i = 0; i < list.length; i++) {
        var temp = list[i];
        var remainingList = [...list.slice(0, i), ...list.slice(i + 1)];
        var permutations = getPermutations(remainingList);

        //Add all the permutations to the list
        for(let i = 0; i < permutations.length; i++) {
            permutationsList.push([temp, ...permutations[i]])
        }
    }
    return permutationsList
}