import React, { useState, useEffect } from "react";
import PostList from "./PostList/PostList";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const req = axios.get("http://localhost:4000/posts");
    req.then((res) => {
      setPosts(res.data);
    });
  }, []);

  return <PostList name="Daily stories" posts={posts} />;
}
