import React from "react"
import Star from "./RatingStar.jsx"

const getRange = value => {
    if (value === 0) {
        return []
    }
    else {
        return getRange(value - 1).concat(value)
    }
}

export default React.createClass({
    getInitialState()
    {
        return {
            value: null,
            hoverValue: null
        }
    },
    setValue(value)
    {
        const {onValueChange} = this.props
        onValueChange && onValueChange(value)

        this.setState({value})
    },
    render()
    {
        const {stars = 5} = this.props
        const {value, hoverValue} = this.state

        const isEnabled = index => isRight => {

            if (hoverValue != null)
            {
                return hoverValue >= (index + (isRight ? 1 : 0.5))

            } else if (value != null) {
                return value >= (index + (isRight ? 1 : 0.5))
            } else {
                return false
            }
        }

        return (
            <div className="rating-component" onMouseLeave={() => this.setState({hoverValue: null})}>
                {
                    getRange(stars).map((value, index) => {
                            const sideEnabled = isEnabled(index)
                            return (
                                <Star key={index}
                                      isHover={hoverValue != null}
                                      leftEnabled={sideEnabled(false)}
                                      rightEnabled={sideEnabled(true)}
                                      onMouseEnterLeft={() => this.setState({hoverValue: index + 0.5})}
                                      onMouseEnterRight={() => this.setState({hoverValue: index + 1})}
                                      onClickLeft={() => this.setValue(index + 0.5)}
                                      onClickRight={() => this.setValue(index + 1)}
                                />)
                        }
                    )}
                <button onClick={() => this.setValue(null)}>
                    Clear
                </button>
            </div>
        )

    }
})