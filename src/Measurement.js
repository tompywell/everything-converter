import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap';
import './Measurement.css'

class Measurement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      units: this.props.units
    }
  }

  onChange = (value, multiplier) => {
    let standardised = value / multiplier
    let units = this.state.units;
    for (let i=0; i<units.length; i++){
      units[i].value = standardised * units[i].multiplier
    }
    this.setState({
      units: units
    })
  }

  onClick = () => {
    let units = this.state.units
    for (let i=0; i<units.length; i++){
      units[i].value = ''
    }
    this.setState({
      units: units
    })
  }

  render = () => {
    let list = this.state.units.map(unit => {
      return (
        <div className="Input-group-container" key={unit.name}>
          <InputGroup>
            <Input onClick={this.onClick} onChange={(e) => this.onChange(e.target.value, unit.multiplier)} value={unit.value}/>
            <InputGroupAddon addonType="append">{unit.symbol}</InputGroupAddon>
            <InputGroupAddon addonType="append">{unit.name}</InputGroupAddon>
          </InputGroup>
        </div>
      )
    })
    return (
      <div className="list">
        {list}
      </div>
    );
  }
}

export default Measurement;
