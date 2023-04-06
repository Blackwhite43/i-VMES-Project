const { default: axios } = require('axios')
const xlsx = require('xlsx')
var wb = xlsx.readFile('./partCok.xlsx')
var ws = wb.Sheets["PartListMaster"]
var json = xlsx.utils.sheet_to_json(ws)
var arrayFiltered = []

json.map(jsonSingle=>{
    if(typeof(jsonSingle.nomor)=='number' && jsonSingle.partneed>='1'){
        arrayFiltered.push({
            partcode:jsonSingle.partcode,
            partname:jsonSingle.partname,
            supplier:jsonSingle.supplier,
            partqty:jsonSingle.partneed
        })
    }
})
console.log(arrayFiltered)

/*axios.post('http://localhost:9073/menu/breakdownCok',arrayFiltered)
.then(hsl=>console.log(hsl))*/