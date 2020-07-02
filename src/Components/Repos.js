import React,{useState,useEffect} from 'react'
import Axios from "axios"
import {ListGroup, ListGroupItem} from "reactstrap"

export default function Repos({repos_url}) {
    const [repos, setRepos]=useState([])
    const fetchRepos=async ()=>{
        const response= await Axios.get(repos_url)
        setRepos(response.data)
    }

    useEffect(()=>{
        fetchRepos()
    },[repos_url])
    return (
        <div>
            <ListGroup>
            {repos.map(repo=>(
                <ListGroupItem key={repo.id}>
                <div className="text-primary text-dark">
                {repo.name}
                </div>
                <div className="text-secondary">
                {repo.language}
                </div>
                <div className="text-info">
                {repo.description}
                </div>
                
                </ListGroupItem>
            ))}
            </ListGroup>
        </div>
    )
}
