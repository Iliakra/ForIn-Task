

export default function orderByProps(obj, properties) {
    let arr = [];
    for (let key in obj) {
        let value = obj[key];
        let elem = {'key':key,'value': value};
        arr.push(elem);
    }

    function searchProp (properties){
        
        let propA = properties[0];
        let propB = properties[1];
        let forDeletionA = arr.filter(item => item.key === propA);
        let forDeletionB = arr.filter(item => item.key === propB);
        let forDeletion = forDeletionA.concat(forDeletionB);
        return forDeletion
    }

    let resultArr = searchProp (properties);

    let newArr = arr.filter(item => !resultArr.includes(item));

    function compare (a,b) {
        const propA = a.key;
        const propB = b.key;

        let comparison = 0;
        if (propA > propB) {
            comparison = 1;
        } else if (propA < propB) {
            comparison = -1;
        }
        return comparison;
    }

    let sortedArr = newArr.sort(compare);

    let result = resultArr.concat(sortedArr);
    return result;
}