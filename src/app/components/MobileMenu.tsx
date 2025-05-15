import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import RetroButton from './RetroButton';

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: () => void
}

export function MobileMenu( { isOpen, setIsOpen }: MobileMenuProps ) {

  return (
    <div className="md:hidden">
      <Popover open={ isOpen } onOpenChange={ setIsOpen }>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-2" sideOffset={5}>
          <div>
            <RetroButton bgColor="yellow" isMobile onClick={ () => setIsOpen }>
              Inicio
            </RetroButton>
            <RetroButton bgColor="blue" isMobile onClick={ () => setIsOpen }>
              Productos
            </RetroButton>
            <RetroButton bgColor="green" isMobile onClick={ () => setIsOpen }>
              Contáctanos
            </RetroButton>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
