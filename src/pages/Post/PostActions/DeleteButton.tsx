import styles from "../Post.module.css"
import Button from '../../../components/Button'
import trash from "../../../assets/images/Vector.svg"
import { deletePost } from "../../../services/DeletePosts"
import { useUi } from "../../../context/UserContext"
import { useState } from "react"
import ModalDelete from "../ModalActions/DeleteModal"


const DeleteButton = ({ id }: { id: number }) => {

    const { setPosts, fetchPosts, setLoading } = useUi();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true)
            await deletePost(id)

            setPosts((prev) => prev.filter((post) => post.id !== id))
            await fetchPosts();

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <>
            <Button className={styles.icon} type="button" aria-label="Delete post" onClick={() => setShowDeleteModal(true)} >
                <img src={trash} alt="" />
            </Button>

            {showDeleteModal && (
                <ModalDelete
                    onCancel={() => setShowDeleteModal(false)}
                    onConfirm={handleDelete}
                />
            )}

        </>
    )
}

export default DeleteButton