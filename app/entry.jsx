import React from "react"
import {render} from "react-dom"

import "./entry.scss"

const SampleCmpnt = () => (
		<div id="title">
			Hello World
		</div>
	)

render(<SampleCmpnt/>, document.getElementById("app"))