import { animals } from 'animalShelter.data';

let title = document.createElement('h1');
title.textContent = 'Adoptable Animals';
document.body.appendChild(title);

for (let animal of animals) {
    
    let animalName = document.createElement('h2');
    animalName.textContent = animal[0];
    document.body.appendChild(animalName);
    
    let picture = document.createElement('img');
    picture.src = animal[1];
    document.body.appendChild(picture);
    
    let description = document.createElement('p');
    description.textContent = animal[2];
    document.body.appendChild(description);
    
    let button = document.createElement('button');
    button.textContent = 'Like';
    document.body.appendChild(button);
    
    button.addEventListener('click',()=>{
        if(button.textContent === 'Like'){
            button.textContent = 'Liked!'
            }else{
                button.textContent = 'Like'
            }
    } )
}



//AppScript


//drive app

//used to automate task in drive docs and sheet.
let id1 = 'accb4372522af72303e7bcd67a8e953189205bb6728a';
let id2 = 'e514a7d3e2061ca9e33533074ded28a650a57cd24f04';

//get file by id takes the id and returns the corresponding file.
let file = DriveApp.getFileById(id2);
//.getName returns the name of the file
let fileName = file.getName();

console.log(fileName);

//changing the name of a file
let id = '4FTT3tZLKLxIJhBNdyDCGc1rYJLUV8kQ4c4aodAZx8pE';
let file = DriveApp.getFileById(id);

let oldName = file.getName();
console.log(oldName);

//.setName is used to change the name of a file
file.setName('haallo');
let newName = file.getName();
console.log(newName);

//making a copy of a file using .makeCopy and giving it a name
let firstCopy = file.makeCopy('Copy 1 of Inventory of Cat Toys');
let firstCopyId = firstCopy.getId();
let firstCopyName = firstCopy.getName();

console.log(firstCopyId);
console.log(firstCopyName);

let secondCopy = file.makeCopy('copy 2');
let secondCopyId = secondCopy.getId();
let secondCopyName = secondCopy.getName();

console.log(secondCopyId);
console.log(secondCopyName);


//document app
let id1d = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';
let id2d = '1NH4DAJhLXW2f4DNi0ciEDoCOLe4cFbp0s_qMFRgfR84';

let doc1 = DocumentApp.openById(id1d);
let doc1Name = doc1.getName();
//.getText retrieves a text from google docs
let text1 = doc1.getText();
console.log(text1);
console.log(doc1Name);

let doc2 = DocumentApp.openById(id2d);
let doc2Name = doc2.getName();
let text2 = doc1.getText();
console.log(text2);
console.log(doc2Name);

//replacing a txt it get two arguments that is the string to replace and 
//the new word to replace with. it replaces every occurence
// of the old string with the new one
let id11 = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';

let doc = DocumentApp.openById(id11);
let originalText = doc.getText();
console.log(originalText);

doc.replaceText('you', 'bang');
let newText = doc.getText();
console.log(newText);

//using a for loop to replace elements contineously
let doc = DocumentApp.openById('226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0');
let edits = [
    ['Xi', 'Sidhe'],
    ['seashells', 'diamonds'],
    ['by the seashore', 'on the soles of her shoes']
];

for (let edit of edits) {
   doc.replaceText(edit[0], edit[1]) 
}

//spreadsheetApp
let id22 = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id22);

//.getRange().getValues() selects a cell in the sheet and return their values as nested arrays
let values = sheet.getRange("B1:B8").getValues();
let stemCount = 0;
for(let row of values){
    for(let cell of row){
        if(cell === 'stem'){
            stemCount++
        }
    }
}
console.log(values[0][0]);
console.log(stemCount + ' customers are paying with stems.');


//creating helper functions to help automate tidious task
import { copyOfContract, textEdits } from 'grasshopper.documents';
  
function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}


function updateDoc(doc, edits) {
    for(var edit of edits){
        doc.replaceText(edit[0], edit[1]);
    }
}

function main() {
    let sheet = SpreadsheetApp.openById(spreadsheetId);
    let values = sheet.getRange("A2:C5").getValues();
   
    for (let row of values) {
      let copyId = makeCopy(contractId, row[0] + ' Contract');
      let copy = DocumentApp.openById(copyId)
      let edits =  [
            [ 'CLIENT', row[0] ],
            [ 'FEE', row[1] ],
            [ 'SERVICE', row[2] ]
          ];
          updateDoc(copy, edits);
    }
  }

updateDoc(copyOfContract, textEdits);