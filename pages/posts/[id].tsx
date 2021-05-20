import React, {useEffect, useState} from "react";
import Layout from "../../src/components/Layout";
import {getPostById} from "../api/posts";
import {useRouter} from "next/router";


const Post:React.FC = () =>{
    const router = useRouter();
    const [post,setPost] = useState('')
    useEffect(() =>{
        getPostById(Number(router.query)).then(post => setPost(post.data.body))
    });
    return(
        <Layout title={''}>
            {<p>{post}</p>}
        </Layout>
    )
}
export default Post;
