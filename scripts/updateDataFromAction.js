import fse from 'fs-extra'
const date = process.argv[2]
const detail = decodeURI(process.argv[3])
let data = JSON.parse(fse.readFileSync('src/data.json'))
if (!data[date]) {
    data[date] = { detail }
    fse.writeJSONSync('src/data.json', data)
}