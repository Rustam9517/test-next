import React, {useEffect, useState} from "react";
import Layout from "../../src/components/Layout";
import {getPosts} from "../api/posts";
import {Post} from "../../interfaces";

const PostsPage: React.FC = () =>{

    const [posts,setPosts] = useState<Post[]>();
    useEffect(():void =>{
        getPosts().then(res =>{
            setPosts(res.data)
        })
    },[]);

    return(
        <Layout title={'Posts'}>
            <ul>
                {
                    posts?.map((post,index) =>(
                       <li key={index}>{post.title}</li>
                    ))
                }
            </ul>

        </Layout>
        );
}

export default PostsPage;
