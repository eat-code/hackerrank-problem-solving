// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    return ar.reduce((target, item) => {
        return target + item;
    }, 0);
}