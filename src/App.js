import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import './App.css'
import Measurement from './Measurement.js'

let measurements = {
  mass: [
    {name: 'milligram', symbol: 'mg', value: '', multiplier: 1000000},
    {name: 'gram', symbol: 'g', value: '', multiplier: 1000},
    {name: 'kilogram', symbol: 'kg', value: '', multiplier: 1},
    {name: 'ounce', symbol: 'oz', value: '', multiplier: 35.274},
    {name: 'pound', symbol: 'lb', value: '', multiplier: 2.20462},
    {name: 'stone', symbol: 'st', value: '', multiplier: 0.157473
    }
  ],
  length: [
    {name: 'millimetre', symbol: 'mm', value: '', multiplier: 1000},
    {name: 'centimetre', symbol: 'cm',value: '', multiplier: 100},
    {name: 'meter', symbol: 'm', value: '', multiplier: 1},
    {name: 'kilometre', symbol: 'km', value: '', multiplier: 0.001},
    {name: 'inch', symbol: 'in', value: '', multiplier: 39.3701},
    {name: 'foot', symbol: 'ft', value: '', multiplier: 3.28084},
    {name: 'yard', symbol: 'yd', value: '', multiplier: 1.09361},
    {name: 'mile', symbol: 'mi', value: '', multiplier: 0.000621371}
  ],
  speed: [
    {name: 'metre per second', symbol: 'm/s', value: '', multiplier: 1},
    {name: 'kilometre per hour', symbol: 'km/h', value: '', multiplier: 3.6},
    {name: 'feet per second', symbol: 'fps', value: '', multiplier: 3.28084},
    {name: 'miles per hour', symbol: 'mph', value: '', multiplier: 2.23694},
    {name: 'knot', symbol: 'kn', value: '', multiplier: 1.94384}
  ],
  area: [
    {name: 'square metre', symbol: 'm\u00B2', value: '', multiplier: 1},
    {name: 'square kilometre', symbol: 'km\u00B2', value: '', multiplier: 1e-6},
    {name: 'square foot', symbol: 'ft\u00B2', value: '', multiplier: 10.7639},
    {name: 'square yard', symbol: 'yd\u00B2', value: '', multiplier: 1.196},
    {name: 'square mile', symbol: 'mi\u00B2', value: '', multiplier: 3.861e-7},
    {name: 'acre', symbol: 'ac', value: '', multiplier: 0.000247105},
    {name: 'hectare', symbol: 'ha', value: '', multiplier: 1e-4}
  ],
  time: [
    {name: 'millisecond', symbol: 'ms', value: '', multiplier: 3.6e+6},
    {name: 'second', symbol: 's', value: '', multiplier: 3600},
    {name: 'minute', symbol: 'm', value: '', multiplier: 60},
    {name: 'hour', symbol: 'hr', value: '', multiplier: 1},
    {name: 'day', symbol: 'd', value: '', multiplier: 0.0416667},
    {name: 'week', symbol: 'w', value: '', multiplier: 0.00595238},
    {name: 'month', symbol: 'm', value: '', multiplier: 0.00136986},
    {name: 'year', symbol: 'y', value: '', multiplier: 0.000114155},
  ]
}

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isOpen: false,
      selected: 'choose measurement',
      units: []
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  select = (choice) => {
    this.setState({
      selected: choice,
      units: measurements[choice]
    })
  }

  render(){
    let dropdownItems = Object.keys(measurements).map(key => {
      return (
        <DropdownItem key={key} onClick={() => this.select(key)}>
          {key}
        </DropdownItem>
      )
    })

    return (
      <div className="App">
      <Navbar light expand="sm">
          <NavbarBrand href="/">everything-converter</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.state.selected}
                </DropdownToggle>
                <DropdownMenu right>
                  {dropdownItems}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/tompywell/everything-converter">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Measurement key={this.state.units} units={this.state.units}/>
      </div>
    );
  }
}

export default App;
