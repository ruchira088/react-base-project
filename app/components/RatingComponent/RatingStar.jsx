import React from "react"
import classNames from "classnames"
import "./RatingStar.scss"

const SingleSide = ({enabled, onClick, onMouseEnter, side, isHover}) => (
    <div className="rating-star-half" onClick={onClick} onMouseOver={onMouseEnter}>
        <div className={classNames(`rating-star-half-${side}`, {enabled}, {"is-hover": isHover})}/>
    </div>
)

export default ({isHover, onClickLeft, onMouseEnterLeft, leftEnabled, onClickRight, onMouseEnterRight, rightEnabled}) =>
{
    const createSide = enabled => onClick => onMouseEnter => side =>
        <SingleSide isHover={isHover} enabled={enabled} onClick={onClick} onMouseEnter={onMouseEnter} side={side}/>

    return (
        <div className="rating-star">
            {   createSide(leftEnabled)(onClickLeft)(onMouseEnterLeft)("left")  }
            {   createSide(rightEnabled)(onClickRight)(onMouseEnterRight)("right")  }
        </div>
    )
}