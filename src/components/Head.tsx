import { useEffect } from 'react'

interface HeadProps {
    title: string;
    description?: string;
}

const Head = (props: HeadProps) => {
    useEffect(() => {
        document.title = props.title + ' | CodeLeap';
        document.querySelector('meta[name="description"]')
            ?.setAttribute('content', props.description || '')
    }, [props])

    return (
        <div></div>
    )
}

export default Head