import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='container bg-dark text-left'>
        <input type="text" placeholder="Tìm SV theo Tên"/>
      </div>
    )
  }
}
