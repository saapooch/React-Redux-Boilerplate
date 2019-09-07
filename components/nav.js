import React, { Component } from 'react';
import Link from 'next/link'


export default class Nav extends Component {

	render(){
		return (
			<div className='nav_bar_container'>
				<nav className="navbar navbar-light navbar-expand-lg navbar-toggleable-sm">
				  <div>
					React Redux Boilerplate
				  </div>
				</nav>
			 </div>
		)
	}


}
