import cx from 'classnames'
import { Link, animateScroll as scroll } from "react-scroll";


const SmoothScrollLink = (props) => {

    const {
        className,
        activeClass,
        to,
        spy,
        smooth,
        duration,
        exact,
        offset,
        linkText
    } = props

    return (
        <>
            <Link
                // className={className}
                activeClass={activeClass}
                to={to}
                spy={spy}
                smooth={smooth}
                duration={duration}
                exact={exact}
                offset={offset}
            >
                <a
                    className={className}
                    onClick={() => console.log("clicking")}
                >
                    {linkText}
                </a>
            </Link>
        </>
    )
}

export default SmoothScrollLink