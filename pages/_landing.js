import {Component} from 'react'
import Page from '../components/page'
import Store from '../store'
import TestActions from "../actions/test";

export default class Landing extends Component {

	constructor(props) {
		super(props);
		this.state = {name: 'Initial'}
  }

	componentDidMount() {
		Store.dispatch(TestActions.receive('This is a piece of data passed through an action and reducer'))
		const state = Store.getState()
		this.setState({name: state.test.data})
	}

	render() {
		return (
			<Page>
				<h1 className='p-3 pb-0'> React Redux Boilerplate </h1>
				<h5 className='pl-3 roboto'> {this.state.name} </h5>
			</Page>
		)
	}
}
