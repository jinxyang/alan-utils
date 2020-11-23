import XLSX from 'xlsx'

function fixNumber(number: number): string {
  if (number > 9) return String(number)
  return `0${number}`
}

function getDateString(date: Date): string {
  const year = date.getFullYear()
  const month = fixNumber(date.getMonth() + 1)
  const day = fixNumber(date.getDate())
  const hours = fixNumber(date.getHours())
  const minutes = fixNumber(date.getMinutes())
  const seconds = fixNumber(date.getSeconds())
  return `${year}-${month}-${day} ${hours}_${minutes}_${seconds}`
}

type Type = 'excel'
// type Inner = string[] | number[]
// type TableData = Inner[]

export default function fileMaker(
  type: Type,
  tableData: [],
  name?: string,
): void {
  const ws = XLSX.utils.aoa_to_sheet(tableData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
  XLSX.writeFile(
    wb,
    (name !== undefined ? name : 'sheetjs') +
      getDateString(new Date()) +
      '.xlsx',
  )
}
