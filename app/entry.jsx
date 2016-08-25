import React from "react"
import {render} from "react-dom"
import catSrc from "../assets/home-cat.jpg"
import "./entry.scss"


const SampleCmpnt = () => (
		<div id="title">
			Hello World
			<img src={catSrc}/>
		</div>
	)

render(<SampleCmpnt/>, document.getElementById("app"))