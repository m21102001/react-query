import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const Qa =()=>{
    const{isloading ,data}=useQuery('posts',()=>{
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    })
    if(isloading){
        return <h2>loading...</h2>
    }

    return(
        <>
        <h2>Qa super heroes page</h2>
        {data?data.map()}
        </>
    )
}