const fs = require("fs")
fs.readdir(process.argv[2], (err, arr) => {
	if(err) {
		return console.log(err)
	}
	arr.filter((item) => item.endsWith("." + process.argv[3]))
	.forEach((item) => console.log(item))
})
