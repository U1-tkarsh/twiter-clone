import React, { useEffect, useState } from "react";
import Tweet from "./tweet";
import Card from "./Card";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  function deleteDoc(id) {
    db.collection('posts').props.posts(id).delete()
}

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  



  return (
    <div className="feed">
      <div className="feed__header">
        <h4>Home</h4>
      </div>

      <Tweet />
      
      {posts.map((posts, i) => (
        <Card 
        key={posts.text = i}
        displayName={posts.displayName}
        username={posts.username}
        demo={posts.demo}
        />
        ))}
    </div>
  );
}
export default Feed;
