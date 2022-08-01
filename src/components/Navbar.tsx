import React from 'react'
//navbar instructions from: https://garrett-txt.medium.com/simple-navbar-component-using-react-typescript-and-styled-components-54e357e2cbcb

//This creates a navbar for the Quiz app

const NavigationBar = (props: {
    brand: { name: string; to: string };
    links:  Array<{ name: string; to: string }>
  }) => {
    const { brand, links } = props;
  const NavLinks: any = () => links.map((link: { name: string, to: string }) => <li key={link.name}><a href={link.to}>{link.name}</a></li>);
  return (
    <div>
      <a href={brand.to}>{brand.name}</a>
      <NavLinks />
      </div>
  )
}

export default NavigationBar