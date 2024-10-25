import React, { useEffect, useState } from 'react'
import './App.css';

const GithubUser = () => {

    const[userData, setUserData] = useState({});
    const[loading, setLoading] = useState(true);
    
    const[githubId, setGithubId] = useState("");    

    
    const handleChange =(e) => {
        setGithubId(e.target.value);
    };

    const handleOnClick = (e) => {
        setGithubId(e.target.value);
    }

    // useEffect(() => {
    //     handleOnClick();
    // }, []);

    const getData = async() => {
        const response = await fetch("https://api.github.com/users/${githubId}");
        const data = await response.json();
        setUserData(data);
        setLoading(false);
        console.log();
    }

    console.log(userData);

    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <>
    <div className='inputContainer'>
        <input onChange ={handleChange} value = {githubId} type="text" placeholder='Search Github User'/>
        <button onClick={handleOnClick}>Submit</button>
    </div>
      <div>
        <div className="imageWrapper">
            <img src={userData.avatar_url}alt="" />
        </div>
        <h2>{userData.name}</h2>
        <p>{userData.login}</p>
        <div className="btnWrapper">
          
                <a href= {userData.html_url}>checkout profile</a>
        </div>
        <p>{userData.followers} Followers</p>
        <p>{userData.following} Following</p>
      </div>
    </>
  )
}

export default GithubUser;
