import { Link } from 'react-router-dom'
import { cn } from "@/lib/utils"

interface RetroButtonProps {
  children?: React.ReactNode
  url?: string
  bgColor?: string
  isMobile?: boolean
  className?: string
  onClick?: () => void
}

export default function RetroButton({ children, url, bgColor, onClick, isMobile, className }: RetroButtonProps) {
  if (url === undefined) url = '/';

  const baseClassNames = `relative px-4 py-2 font-medium transition-all text-black rounded-md 
            shadow-[3px_3px_0px_rgba(0,0,0,0.8)] translate-x-[-1px] translate-y-[-1px] 
            hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.8)] 
            active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_rgba(0,0,0,0.8)]`

  const getBgColor = () => {
    switch (bgColor) {
      case 'red':
        return 'bg-red-200 hover:bg-red-300'
      case 'green':
        return 'bg-green-200 hover:bg-green-300'
      case 'blue':
        return 'bg-blue-200 hover:bg-blue-300'
      case 'yellow':
        return 'bg-yellow-200 hover:bg-yellow-300'
      default:
        return 'bg-black'
    }
  }

  const getIsMobile = () => {
    if ( isMobile ) {
      return 'bottom-6 right-6 p-3 w-screen'
    }else {
      return ''
    }
  }

  return (
    <div>
      <Link to={ url }>
        <button 
            className={ cn( baseClassNames, getBgColor(), getIsMobile(), className ) }
            onClick={ onClick }> 
          { children } 
        </button>
      </Link>
    </div>
  )
}
