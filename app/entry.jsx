import React from "react"
import {render} from "react-dom"
import catSrc from "../assets/home-cat.jpg"
import RatingComponent from "./components/RatingComponent/RatingComponent.jsx"
import "./entry.scss"


const SampleCmpnt = React.createClass({
	getInitialState()
	{
		return {
			rating: null
		}
	},
	render()
	{
		const {rating} = this.state
		return (
			<div id="title">
				Hello World
				<img src={catSrc}/>
				<RatingComponent onValueChange={rating => this.setState({rating})} stars={10} hasHalfStars={false}/>
				<div>
					Rating {rating}
				</div>
			</div>
		)
	}
})

render(<SampleCmpnt/>, document.getElementById("app"))