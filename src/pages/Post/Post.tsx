import styles from "./Post.module.css"
import { useUi } from "../../context/UserContext"
import { formatDistanceToNow } from "date-fns"
import DeleteButton from "./PostActions/DeleteButton"
import EditButton from "./PostActions/EditButton"
import Loading from "../../components/Loading"

const Post = ({ username }: { username?: string | null }) => {

    const { posts, loading } = useUi();

    if (loading) {
        return <Loading loading={loading} />
    }
    return (
        <>
            {posts.map((post) => (
                <article className={styles.article} key={post.id}>
                    <header className={styles.header}>
                        <h3 className={styles.titlePost}>{post.title}</h3>
                        <div className={styles.buttons}>
                            {username && username === post.username ? (
                                <>
                                    <DeleteButton id={post.id} />
                                    <EditButton post={post} />
                                </>
                            ) : null}
                        </div>
                    </header>
                    <div className={styles.author}>
                        <p>@{post.username}</p>
                        <p>{formatDistanceToNow(new Date(post.created_datetime), {
                            addSuffix: true
                        })}</p>
                    </div>
                    <div className={styles.content}>
                        <p>{post.content}</p>
                    </div>

                </article>
            ))}
        </>
    )
}

export default Post