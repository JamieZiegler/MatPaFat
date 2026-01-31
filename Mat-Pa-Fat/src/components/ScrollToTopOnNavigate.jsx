import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopOnNavigate() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView()
            }
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}
