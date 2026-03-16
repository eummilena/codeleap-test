import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import styles from "./Signup.module.css"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const [username, setUsername] = useState('')
    const navigate = useNavigate();
    // username = "Milena"

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        localStorage.setItem('username', username);
        navigate("/feed")

        setUsername('')
    }

    return (
        <section className={styles.section}>
            <div className={styles.areaEnter}>
                <h1>Welcome to CodeLeap network!</h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Please enter your username"
                        id="username"
                        placeholder="John doe"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />

                    <div className={styles.area}>
                        <Button className={`buttonBlue ${styles.button}`} disabled={!username}>Enter</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Signup