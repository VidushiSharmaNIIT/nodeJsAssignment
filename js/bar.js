var output = [];
var fs = require('fs');
/* reading csv line by line */
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')
});
var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var flag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var flag1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Primary_Type = lineSplit[5];
    jsonFromLine.Year = lineSplit[17];
    jsonFromLine.Description = lineSplit[6];
    if(jsonFromLine.Primary_Type == 'CRIMINAL DAMAGE'){
    if (jsonFromLine.Description == 'TO PROPERTY') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    } else if (jsonFromLine.Description == 'TO STATE SUP PROP') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                flag[i]++
            }
        }
    }
    else if (jsonFromLine.Description == 'TO VEHICLE') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                flag1[i]++
            }
        }
    }
   }     
})

lineReader.on('close', function(line) {
    for (let i = 0; i < 16; i++) {
        obj = {
            year: i + 2001,
            to_Property: c[i],
           to_State_Sup_Prop:flag[i],
           to_vehicle:flag1[i]

        }
       output.push(obj) }
    var convert = JSON.stringify(output, null, 2);
    fs.writeFile('bar.json', convert);
});