import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
    const [posts, setPost] = useState([
        {
            username: "vasiliyribakov",
            caption: "Все будет заебись",
            imageUrl:
                "https://instagram.fkgf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/101035703_688480591928696_4996110215808425238_n.jpg?_nc_ht=instagram.fkgf1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=IxKmzmUBoLgAX8WBgA0&oh=1c5e28232832e2413fad61b00f917472&oe=5F6A089B",
        },
        {
            username: "vasiliyribakov",
            caption: "Все будет заебись",
            imageUrl:
                "https://instagram.fkgf1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/105942212_265299748030494_7274953083073322176_n.jpg?_nc_ht=instagram.fkgf1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=vccs_C0eGz0AX-KIerd&oh=3d7e6d8965787b7444daeb9f7aefe506&oe=5F69EF9E",
        },
    ]);

	useEffect(() => {
		db.collection('posts').onSnapshot(snapshot => {
			
		})
	}, [])

    return (
        <div className="app">
            <div className="app__header">
                <img
                    className="app_headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                    alt=""
                />
            </div>

            {posts.map((post) => (
                <Post
                    username={post.username}
                    caption={post.caption}
                    imageUrl={post.imageUrl}
                />
            ))}
        </div>
    );
}

export default App;
