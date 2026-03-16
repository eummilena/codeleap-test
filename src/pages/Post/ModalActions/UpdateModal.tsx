import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { useUi } from '../../../context/UserContext'
import Textarea from '../../../components/Textarea'
import type React from 'react'
import { useEffect, useRef, useState } from 'react'


type Props = {
    post: {
        id: number
        title: string
        content: string
    }
    onCancel: () => void
    onConfirm: (title: string, content: string) => void
}

const UpdateModal = ({ post, onCancel, onConfirm }: Props) => {
    const { loading } = useUi();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const titleInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        titleInputRef.current?.focus();
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onCancel();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onCancel]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onConfirm(title, content);
    }

    return (
        <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal modalUpdate">
                <h3 id="modal-title">Edit item</h3>
                <form onSubmit={handleSubmit}>

                    <Input
                        label="Title"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        ref={titleInputRef}
                    />

                    <Textarea
                        label="Content"
                        id='updateContent'
                        value={content}
                        name="content"
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <div className="buttons">
                        <Button onClick={onCancel} className="cancel">Cancel</Button>
                        <Button type='submit' className='save' disabled={!title || !content}>Save</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateModal