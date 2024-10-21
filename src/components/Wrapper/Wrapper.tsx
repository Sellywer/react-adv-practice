import { ReactNode, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      {children}
    </div>
  )
}