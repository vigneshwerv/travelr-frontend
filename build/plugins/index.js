var fs = require('fs');
var path = require('path');
var R = require('ramda');


module.exports = {
  plugins: R.map(x => require('./' + x),
    R.filter(file => file !== path.basename(__filename),
      fs.readdirSync(path.resolve(__dirname), {}, (err, files) => files)
    )
  )
};
