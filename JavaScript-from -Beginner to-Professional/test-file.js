let gridArr = [];
let numberOfCells = 64;
let counter2 = 0;
let row1;
for (let i = 0; i < numberOfCells + 1; i++){
    if (counter2 % 8 == 0){
        if (row1 != undefined){
            gridArr.push(row1);
        }
        row1 = [];
    }
    counter2++;
    let temp = counter2;
    row1.push(temp);

}
console.table(gridArr);
