import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

export default function Header() {
  return (
    <Navbar className='shadow mb-6'>
      <NavbarBrand className='text-2xl font-bold'>
        <h1>NextJS 14 - ToDo App</h1>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem>
          <span className='font-extralight'>Intive Demo by Leandro Favre</span>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
