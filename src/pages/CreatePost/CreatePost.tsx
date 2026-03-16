import Button from '../../components/Button'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import { useUi } from '../../context/UserContext'
import { createPost } from '../../services/CreatePost'
import styles from "./CreatePoste.module.css"


const CreatePost = ({ username }: { username?: string | null }) => {

    const { title, content, setContent, setLoading, loading, setTitle, fetchPosts } = useUi();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) return;

        try {
            setLoading(true);

            await createPost({
                username,
                title,
                content,
            })

            setTitle("")
            setContent("")
            await fetchPosts();

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <section className={styles.section}>
            <h3>What's on your mind?</h3>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Title"
                    id="title"
                    name="title"
                    placeholder="Hello World"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <Textarea
                    label='Content'
                    id="content"
                    placeholder="Content here"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className={styles.area}>
                    <Button
                        className="buttonBlue"
                        type="submit"
                        disabled={loading || !title || !content}>Create
                    </Button>
                </div>
            </form>

        </section>

    )
}

export default CreatePost