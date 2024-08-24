//Class components are use state and lifecycle components.
/*state: Inorder to achieve Virtual-DOM, if any thing changed need to put in variable 
and that variable need to put it in state.*/

/*componentDidMount() => it will be called when it should be called only 
				React is going to call this!!!!
				
				3 phases in react class components 
				
				1. Mounting   => whenever component is loaded
				2. Updating   => update an action 
				3. UnMounting => remove component from dom 
				
				  componentDidMount()
				  
				  componentDidUpdate()
				  
				  componentWillUnmount()
		
	componentDidMount() => it will be called when it should be called only 
				React is going to call this!!!!
	*/

// Overcome this issue edveryone using HOOKs

import React, { Component } from 'react'

export default class ClassComponents extends Component {
  render() {
	return (
		<>
		<p>See there {this.props.name} is playing!!</p>
        <p>Her age is {this.props.age }</p>
        <p>Her age is {this.props.age + 10 }</p>
        </>
	)
  }
}
