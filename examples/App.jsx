import React, { useEffect } from 'react'

import { fileSelector, fileMaker, useViewport } from '../src'
import fetch from './fetch'

const App = () => {
  const { width } = useViewport()
  useEffect(() => {
    async function getData() {
      try {
        const id = await fetch({ url: '/api/v1/pub/login/captchaid' })
        // console.log(id)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  async function chooseFile() {
    const file = await fileSelector('excel')
    console.log(file)
  }
  function makeFile() {
    const columns = ['姓名', '年龄']
    const data = [['杨金枭', 32]]
    const tableData = [columns, ...data]
    console.log(tableData)
    fileMaker('excel', tableData)
  }
  return (
    <div>
      {width}
      <button onClick={chooseFile}>选择文件</button>
      <button onClick={makeFile}>生成文件xlsx</button>
    </div>
  )
}

export default App
