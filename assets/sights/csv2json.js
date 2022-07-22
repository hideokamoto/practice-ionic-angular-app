const path = require('path')
const csvFilePath= path.join(__dirname, 'DSIGHT_1.csv')
const csv=require('csvtojson')
csv({
    noheader: true
})
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const dataset = jsonObj.map(obj => ({
        id: obj.field1,
        name: obj.field9,
        name_kana: obj.field10,
        description: obj.field13,
        address: obj.field18,
        tel: obj.field19,
        holiday: obj.field26,
        business_hours:  obj.field27,
        price: obj.field28,
        notes: obj.field29
    }))
    console.log(JSON.stringify(dataset));
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})