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
        linkText,
        setSelectedComp
    } = props

    return (
        <>
            <Link
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
                    onClick={() => setSelectedComp(linkText)}
                >
                    {linkText}
                </a>
            </Link>
        </>
    )
}

export default SmoothScrollLink