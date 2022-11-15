function findFirstLetter(list, a) {
    const returnList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].charAt(0) === a) {
            returnList.push(list[i]);
        }
    }
    if (returnList.length !== 0) {
        return returnList;
    } else {
        return null;
    }
}