type Type = 'excel'

export default async function fileSelector(type: Type): Promise<File> {
  const accepts = {
    excel:
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
  }
  const accept = accepts[type]

  return await new Promise((resolve) => {
    const input = document.createElement('input')
    input.accept = accept
    input.style.display = 'none'
    input.type = 'file'
    input.onclick = () => {
      input.value = ''
    }
    input.onchange = () => {
      if (input.files !== null) {
        resolve(input.files[0])
      }
      input.remove()
    }
    document.body.appendChild(input)
    input.click()
  })
}
