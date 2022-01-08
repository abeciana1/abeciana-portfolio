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
        setSelectedComp,
        isOpen,
        setOpen
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
                {setSelectedComp !== undefined ? 
                <div
                    className={className}
                    onClick={() => {
                        setSelectedComp(linkText)
                        if (isOpen === true) {
                            setOpen(false)
                        }
                    }}
                >
                    {linkText}
                </div>
                :
                <div
                    className={className}
                >
                    {linkText}
                </div>
                }
            </Link>
        </>
    )
}

export default SmoothScrollLink