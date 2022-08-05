"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
//navbar instructions from: https://garrett-txt.medium.com/simple-navbar-component-using-react-typescript-and-styled-components-54e357e2cbcb
//This creates a navbar for the Quiz app
const NavigationBar = (props) => {
    const { brand, links } = props;
    const NavLinks = () => links.map((link) => <li key={link.name}><a href={link.to}>{link.name}</a></li>);
    return (<nav>
      <a href={brand.to}>{brand.name}</a>
      <NavLinks />
      </nav>);
};
exports.default = NavigationBar;
