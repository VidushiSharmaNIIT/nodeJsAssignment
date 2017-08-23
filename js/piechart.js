var output = [];
var fs = require('fs');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')
});
var c=[0, 0, 0, 0, 0, 0, 0, 0]
var des = ['ATTEMPT: ARMED-KNIFE/CUT INSTR', 'AGGRAVATED VEHICULAR HIJACKING', 'STRONGARM - NO WEAPON', 'ARMED: HANDGUN',
'ARMED: OTHER DANGEROUS WEAPON', 'VEHICULAR HIJACKING', 'ATTEMPT: ARMED-OTHER FIREARM']
lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Primary_Type = lineSplit[5];
    jsonFromLine.Year = lineSplit[17];
    jsonFromLine.Description = lineSplit[6];
    if (jsonFromLine.Primary_Type == 'ROBBERY') {
    	if (jsonFromLine.Description === 'ATTEMPT: ARMED-KNIFE/CUT INSTR') c[0]++
else if (jsonFromLine.Description === 'AGGRAVATED VEHICULAR HIJACKING') c[1]++                                                                                        
else if (jsonFromLine.Description == 'STRONGARM - NO WEAPON') c[2]++
else if (jsonFromLine.Description == 'ARMED: HANDGUN') c[3]++
 else if (jsonFromLine.Description == 'ARMED: OTHER DANGEROUS WEAPON') c[4]++
else if (jsonFromLine.Description == 'VEHICULAR HIJACKING')c[5]++
 else if (jsonFromLine.Description == 'ATTEMPT: ARMED-OTHER FIREARM')c[6]++

}
})
lineReader.on('close', function(line) {
    for (let i = 0; i < des.length; i++) {
        obj = {
            crimeType:des[i],
                  count:c[i]  
                }
                output.push(obj)
    }
    var convert = JSON.stringify(output, null, 2);
    fs.writeFile('piechart.json', convert);
});
