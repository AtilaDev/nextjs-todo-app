import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand>
        <span className='md:hidden text-md font-bold'>
          NextJS 14 - ToDo App
        </span>
        <span className='hidden md:inline text-lg font-bold'>
          NextJS 14 - ToDo App
        </span>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <span className='md:hidden font-extralight text-xs'>
            Intive demo by Leandro Favre
          </span>
          <span className='hidden md:inline font-extralight'>
            Intive demo by Leandro Favre
          </span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
