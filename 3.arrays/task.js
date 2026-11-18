function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.filter(user => user.gender === gender).length === 0) {
        return 0;
    }
    const result = users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.age, 0);
    const result1 = result / users.filter(user => user.gender === gender).length;
    return result1;
}