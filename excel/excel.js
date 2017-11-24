var json2xls = require('json2xls');



var xls = json2xls(json);

fs.writeFileSync('data.xlsx', xls, 'binary');