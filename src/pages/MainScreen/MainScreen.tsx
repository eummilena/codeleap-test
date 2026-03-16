import styles from "./MainScreen.module.css"
import CreatePost from "../CreatePost/CreatePost"
import Post from "../Post/Post"
import Loading from "../../components/Loading"
import { useUi } from "../../context/UserContext"


const MainScreen = () => {
    const { loading } = useUi();
    const username = localStorage.getItem("username")

    return (
        <main className={styles.feed}>
            <Loading loading={loading}></Loading>
            <header className={styles.header}>
                <h2 className={styles.title}>CodeLeap Network</h2>
            </header>
            <CreatePost username={username} />
            <Post username={username} />
        </main>
    )
}

export default MainScreen