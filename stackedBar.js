var output = [];
var fs = require('fs');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')
});
var c = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
var des=['TO PROPERTY','TO STATE SUP PROP','TO VEHICLE']
lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Primary_Type = lineSplit[5];
    jsonFromLine.Year = lineSplit[17];
    jsonFromLine.Description = lineSplit[6];
    if (jsonFromLine.Primary_Type == 'CRIMINAL DAMAGE')
    {
    	for(let i=0;i<des.length;i++)
{
    if(jsonFromLine.Description == des[i]) {
        for (let j = 0; j < 16; j++) {
            if (jsonFromLine.Year == (j + 2001)) {
                c[i][j]++
            }
        }
    }
}
}
})
lineReader.on('close', function(line) {
     for (let i = 0; i < des.length; i++) {
        obj = {
            Description: des[i],
            2001: c[i][0],
            2002: c[i][1],
            2003: c[i][2],
            2004: c[i][3],
            2005: c[i][4],
            2006: c[i][5],
            2007: c[i][6],
            2008: c[i][7],
            2009: c[i][8],
            2010: c[i][9],
            2011: c[i][10],
            2012: c[i][11],
            2013: c[i][12],
            2014: c[i][13],
            2015: c[i][14],
            2016: c[i][15],
        }
        output.push(obj)
    }
    var convert = JSON.stringify(output, null, 2);
    fs.writeFile('allRobbery.jason', convert);
    })
