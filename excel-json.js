var XLSX = require('xlsx');
var workbook = XLSX.readFile('XLS To JSON.xlsx');
var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    for(z in worksheet) {
        if(z[0] === '!') continue;
        var tt = 0;
        for (var i = 0; i < z.length; i++) {
            if (!isNaN(z[i])) {
                tt = i;
                break;
            }
        };
        var col = z.substring(0,tt);
        var row = parseInt(z.substring(tt));
        var value = worksheet[z].v;

       
        if(row == 1 && value) {
            headers[col] = value;
            continue;
        }

        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
    }
    data.shift();
    data.shift();
    console.log(data);
    
    data.forEach(element => {
        element['Wgt-per-kg'] =(element.Rate/element.Wgt);
        element['finalamount'] =element.Rate - (element.Rate * element.Disc / 100);
        console.log(element);
     });
});



