const { default: axios } = require('axios')
const xlsx = require('xlsx')

var wb = xlsx.readFile('./line_mapping.xlsx')
var ws = wb.Sheets["Sheet1"]
// var json = xlsx.utils.sheet_to_json(ws)
// var arrayFiltered = [];
// var alphabets = [];
// let i, j;
// for (i=0,j=65;j<=90;i++,j++) {
//     alphabets[i] = String.fromCharCode(j);
// }
// for (i=2;;i++) {
//     if (ws[`A${i}`] == undefined) {
//         break;
//     }
//     else {
//         const E = ws[`E${i}`]['w'];
//         const F = ws[`F${i}`]['w'];
//         arrayFiltered.push({
//             model_code: E,
//             line: F
//         })
//     }
// }
// console.log(arrayFiltered);
axios.post('http://localhost:3000/api/v1/linemapping',{ws:ws})
.then(hsl=>console.log(hsl))