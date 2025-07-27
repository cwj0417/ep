import fse from 'fs-extra'
console.log(process.argv)
const date = process.argv[2]
const detail = decodeURI(process.argv[3])
const hh = process.argv[4] || 0
const s3 = process.argv[5] || 0
const s4 = process.argv[6] || 0
let data = JSON.parse(fse.readFileSync('src/data.json'))
if (!data[date]) {
    data[date] = { detail }
    if (hh) {
        data[date].hh = +hh == 0 ? [] : hh.split(',')
    }
    if (s3) data[date].s3 = +s3
    if (s4) data[date].s4 = +s4
    fse.writeJSONSync('src/data.json', data)
}