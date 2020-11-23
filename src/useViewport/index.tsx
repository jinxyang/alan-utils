import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactElement,
} from 'react'

import debounce from '../debounce'

const ViewportContext = createContext({ width: 0 })

export interface ProviderProps {
  children: ReactElement
}

export interface MediaQuery {
  /** 对话框是否可见 */
  width: number
  md: boolean
  lg: boolean
  xl: boolean
  xxl: boolean
}

export function ViewportProvider({ children }: ProviderProps): ReactElement {
  const [width, setWidth] = useState(window.innerWidth)

  function set(): void {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.onresize = debounce(set, 500)
    return () => {
      window.onresize = null
    }
  }, [])
  return (
    <ViewportContext.Provider value={{ width }}>
      {children}
    </ViewportContext.Provider>
  )
}
export const useViewport = (): MediaQuery => {
  const { width } = useContext(ViewportContext)
  const result: MediaQuery = {
    width,
    md: width >= 800,
    lg: width >= 1000,
    xl: width >= 1200,
    xxl: width >= 1600,
  }
  return result
}
