import { useEffect } from "react"

export const useTitle = (title) => {
    
    useEffect(() => {
        document.title = `${title} - Book Shop`
    }, [title])

    return null
}
