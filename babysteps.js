let args = process.argv.splice(2)
console.log(args.reduce((sum, num) => sum + Number(num), 0))

