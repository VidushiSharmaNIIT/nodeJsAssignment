var output = [];
var a;
var fs = require('fs');
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')
});
var c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var c1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var c2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var c3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var c4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var c5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var c6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

lineReader.on('line', function(line) {
    var jsonFromLine = {};
    var lineSplit = line.split(',');
    jsonFromLine.Primary_Type = lineSplit[5];
    jsonFromLine.Year = lineSplit[17];
    jsonFromLine.Description = lineSplit[6];
    if (jsonFromLine.Primary_Type == 'ROBBERY') {
    if(jsonFromLine.Description == 'ATTEMPT: ARMED-KNIFE/CUT INSTR') {
        for (var i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
        a=c[i].length
    }
}
   /* var b=if (jsonFromLine.Description == 'AGGRAVATED VEHICULAR HIJACKING') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c1[i]++
            }
        }
    }
    var c=if (jsonFromLine.Description == 'STRONGARM - NO WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c2[i]++
            }
        }

    }
    var d=if (jsonFromLine.Description == 'ARMED: HANDGUN') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c3[i]++
            }
        }
    }
    var e=if (jsonFromLine.Description == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c4[i]++
            }
        }
    }
    var f=if (jsonFromLine.Description == 'VEHICULAR HIJACKING') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c5[i]++
            }
        }
    }
    var g=if (jsonFromLine.Description == 'ATTEMPT: ARMED-OTHER FIREARM') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c6[i]++
            }
        }
    }
    var h=if (jsonFromLine.Description == '') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c7[i]++
            }
        }
    }
  }*/
  })
    /*if (jsonFromLine.Primary_Type == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    }if (jsonFromLine.Primary_Type == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    }if (jsonFromLine.Primary_Type == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    }if (jsonFromLine.Primary_Type == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    }if (jsonFromLine.Primary_Type == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    }if (jsonFromLine.Primary_Type == 'ARMED: OTHER DANGEROUS WEAPON') {
        for (let i = 0; i < 16; i++) {
            if (jsonFromLine.Year == (i + 2001)) {
                c[i]++
            }
        }
    }
})

    }*/
lineReader.on('close', function(line) {
    for (let i = 0; i < 16; i++) {
        obj = {
            year: i + 2001,
            count: a[i]
        }
        output.push(obj)
    }
    var convert = JSON.stringify(output, null, 2);
    fs.writeFileSync('allRobbery.jason', convert);
});

