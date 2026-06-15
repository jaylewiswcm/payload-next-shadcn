// context/nav-width-context.tsx
import { createContext, useContext, useState } from 'react'

type NavContextType = {
  navWidth: string
  setNavWidth: (width: string) => void
  activeMenu: string
  setActiveMenu: (width: string) => void
}

const NavContext = createContext<NavContextType | null>(null)

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [navWidth, setNavWidth] = useState('900px');
  const [activeMenu, setActiveMenu] = useState('');

  return (
    <NavContext.Provider value={{ navWidth, setNavWidth, activeMenu, setActiveMenu}}>
      {children}
    </NavContext.Provider>
  )
}

export function useNavContext() {
  const context = useContext(NavContext)
  if (!context) throw new Error('useNavWidth must be used within NavWidthProvider')
  return context
}
