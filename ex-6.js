let height = undefined;
let result;

function checkheight(height) {
    let result = height ?? "Height is not defined"
    return result;
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
