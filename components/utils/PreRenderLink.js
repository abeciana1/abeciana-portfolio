import Link from 'next/link'

const PreRenderLink = ({
    className,
    linkText,
    href,
    altText=""
}) => {

    return (
        <>
            <Link
                href={href}
            >
                <a
                    alt={altText}
                    className={className}
                >
                    {linkText}
                </a>
            </Link>
        </>
    )
}

export default PreRenderLink