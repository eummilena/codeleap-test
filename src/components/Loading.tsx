type Props = {
    loading: boolean
}

const Loading = ({ loading }: Props) => {
    if (!loading) return null

    return (
        <div className="loadingOverlay" role="status" aria-live="polite">
            <div className="spinner" aria-hidden="true"></div>
            <p>Loading...</p>
        </div>
    )
}

export default Loading