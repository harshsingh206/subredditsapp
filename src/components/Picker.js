import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props
    return (
      <span>
        {/* <h1>You have selected {value}</h1> */}
        <Select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

