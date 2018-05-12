const fs = require("fs")
module.exports  = function (directory, ext, cb) {
	fs.readdir(directory, (err, arr) => {
        	if(err) {
                	return cb(err)
        	}
		cb(null, arr.filter((item) => item.endsWith("." + ext)))
	})
}
