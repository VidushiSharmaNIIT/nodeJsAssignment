var output = [];
var fs = require('fs');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')
});
var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var flag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Primary_Type = lineSplit[5];
    jsonFromLine.Year = lineSplit[17];
    jsonFromLine.Description = lineSplit[6];
    if (jsonFromLine.Primary_Type == 'BURGLARY') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    } else if (jsonFromLine.Primary_Type == 'ROBBERY') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                flag[i]++
            }
        }
    }
})

lineReader.on('close', function(line) {
    for (let i = 0; i < 16; i++) {
        obj = {
            year: i + 2001,
            Burglary: c[i],
            Robbery:flag[i]

        }
       output.push(obj) }
    var convert = JSON.stringify(output, null, 2);
    fs.writeFile('allBurglaryRobbery.json', convert);
});