const filteredls = require("./module")

filteredls(process.argv[2], process.argv[3], (err, data) => {
	if (err) {
		return console.error(error)
	}
	data.forEach((item) => console.log(item))
})
