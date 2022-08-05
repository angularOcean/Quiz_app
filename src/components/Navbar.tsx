import React from 'react'
//navbar instructions from: https://garrett-txt.medium.com/simple-navbar-component-using-react-typescript-and-styled-components-54e357e2cbcb

const NavigationBar = (props: {
    brand: { name: string; to: string };
    links:  Array<{ name: string; to: string }>
  }) => {
    const { brand, links } = props;
    
  const NavLinks: any = () => links.map((link: { name: string, to: string }) => <li key={link.name}><a href={link.to}>{link.name}</a></li>);
  return (
    <nav>
      <a href={brand.to}>{brand.name}</a>
      <NavLinks />
      </nav>
  )
}

export default NavigationBar