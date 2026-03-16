import Button from "../../../components/Button"
import edit from "../../../assets/images/bx_bx-edit.svg"
import styles from "../Post.module.css"
import { useUi } from "../../../context/UserContext"
import { updatePost } from "../../../services/UpdatePosts"
import { useState } from "react"
import UpdateModal from "../ModalActions/UpdateModal"


const EditButton = ({ post }: { post: { id: number; title: string; content: string } }) => {

    const { fetchPosts } = useUi();
    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const handleUpdate = async (title: string, content: string) => {

        await updatePost(post.id, { title, content })

        await fetchPosts()

        setShowUpdateModal(false)
    }

    return (
        <>
            <Button className={styles.icon} type="button" aria-label="Edit post" onClick={() => setShowUpdateModal(true)}>
                <img src={edit} alt="" />
            </Button>

            {
                showUpdateModal && (
                    <UpdateModal
                        post={post}
                        onCancel={() => setShowUpdateModal(false)}
                        onConfirm={handleUpdate}
                    />
                )
            }
        </>
    )
}

export default EditButton