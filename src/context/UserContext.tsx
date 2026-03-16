import React, { useEffect, useState } from 'react'
import type { User } from '../types/TypeUsers';
import { getPost } from '../services/GetPosts';

type IDataContext = {
    posts: User[];
    loading: boolean;
    title: string;
    content: string;
    setPosts: React.Dispatch<React.SetStateAction<User[]>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setContent: React.Dispatch<React.SetStateAction<string>>;
    fetchPosts: () => Promise<void>
}

const IContext = React.createContext<IDataContext | null>(null);

export const useUi = () => {
    const context = React.useContext(IContext);
    if (!context) throw new Error('useContext must be inside of Provider');
    return context;
}

export const UserContext = ({ children }: React.PropsWithChildren) => {
    const [posts, setPosts] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            setLoading(true)

            const data = await getPost()
            setPosts(data.results)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }


    return (
        <IContext.Provider value={{
            posts, setPosts, loading,
            setLoading, title, setTitle,
            content, setContent, fetchPosts
        }}>
            {children}
        </IContext.Provider>)
}

export default UserContext 