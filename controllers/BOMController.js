const BOM = require('./../models/BOMModel');
const factory = require('./../controllers/handlerFactory');
const catchAsync = require('../utils/catchAsync');

var alphabets = [];
let i, j, k;
for (i=0,j=65;j<=90;i++,j++) {
    alphabets[i] = String.fromCharCode(j);
}
exports.createBOM = catchAsync(async (req, res) => {
    //let newBOM;
    let newBOMArray = [];
    const ws = await req.body.ws;
    for (i=0,j=65;j<=90;i++,j++) {
        alphabets[i] = String.fromCharCode(j);
    }
    for (i=20;;i++) {
        if (ws[`B${i}`] == undefined) {
            break;
        }
        else {
            for (j=11;j<=25;j++) {
                const x = ws[`${alphabets[j]}16`]['w'] + '-' + ws[`${alphabets[j]}17`]['w'] + '-' + ws[`${alphabets[j]}18`]['w'] + '-' + ws[`${alphabets[j]}19`]['w'];
                const y = ws[`C${i}`]['w'];
                const z = ws[`K${i}`]['w']
                newBOMArray.push({
                    product: x,
                    part_code: y,
                    qty: z
                })
                /*newBOM = await BOM.create({
                    product: x,
                    part_code: y,
                    qty: z
                })*/
            }
            for (j=0;j<=4;j++) {
                for (k=0;k<=25;k++) {
                    const x = ws[`${alphabets[j]}${alphabets[k]}16`]['w'] + '-' + ws[`${alphabets[j]}${alphabets[k]}17`]['w'] + '-' + ws[`${alphabets[j]}${alphabets[k]}18`]['w'] + '-' + ws[`${alphabets[j]}${alphabets[k]}19`]['w'];
                    const y = ws[`C${i}`]['w'];
                    const z = ws[`K${i}`]['w'];
                    newBOMArray.push({
                        product: x,
                        part_code: y,
                        qty: z
                    })
                    /*newBOM = await BOM.create({
                        product: x,
                        part_code: y,
                        qty: z
                    })*/
                }
            }
            for (j=0;j<=10;j++) {
                const x = ws[`F${alphabets[j]}16`]['w'] + '-' + ws[`F${alphabets[j]}17`]['w'] + '-' + ws[`F${alphabets[j]}18`]['w'] + '-' + ws[`F${alphabets[j]}19`]['w'];
                const y = ws[`C${i}`]['w'];
                const z = ws[`K${i}`]['w'];
                newBOMArray.push({
                    product: x,
                    part_code: y,
                    qty: z
                })
                /*newBOM = await BOM.create({
                    product: x,
                    part_code: y,
                    qty: z
                })*/
            }
        }
    }
    const newBOM = await BOM.insertMany(newBOMArray)
    //console.log(newBOM);
    res.status(201).json({
        status: 'success',
        data: {
            data: newBOM
        }
    })
})
exports.getAllBOM = factory.getAll(BOM);
exports.getBOM = factory.getOne(BOM);
exports.updateBOM = factory.updateOne(BOM);
exports.deleteBOM = factory.deleteOne(BOM);