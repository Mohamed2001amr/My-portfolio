export default function CustomeLink ({href, children}) {
    return(
        <div>
            <a 
                href={href} 
                className={`hover:text-cyan-500 transition-colors duration-300`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        </div>
    )
}