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
                activeClass={activeClass}
                to={to}
                spy={spy}
                smooth={smooth}
                duration={duration}
                exact={exact}
                offset={offset}
            >
                <div
                    className={className}
                >
                    {linkText}
                </div>
            </Link>
        </>
    )
}

export default SmoothScrollLink