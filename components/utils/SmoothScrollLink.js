// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'

const SmoothScrollLink = (props) => {

    const {
        className,
        href,
        linkText,
    } = props

    return (
        <>
            <Link
                href={href}
            >
                <a
                    className={className}
                >
                    {linkText}
                </a>
            </Link>
        </>
    )
}

export default SmoothScrollLink