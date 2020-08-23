import React, {useState, useEffect} from "react";
import "./App.css";
import Post from "./Post";
import { db } from './firebase'

function App() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
          setPost(snapshot.docs.map(doc => ({
			  id: doc.id,
			  post: doc.data()
		  })));
        })
    }, [])

    return (
        <div className="app">
            <div className="app__header">
                <img
                    className="app_headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                    alt=""/>
            </div>

            {
             posts.map(({id, post}) => (<Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>))
            }
        </div>
    );
}

export default App;
