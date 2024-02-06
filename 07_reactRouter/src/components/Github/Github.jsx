import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='flex flex-col m-5 justify-center  bg-gray-600'>
      <img 
    className='self-center m-4 border-0 rounded-full '
    src={data.avatar_url} alt="Git picture" width={300} />
      <div className=' m-2 p-2 text-white'>Github Id: <span className='font-bold'>{data.login}</span>
     </div>
     <div className='m-2 p-2 text-white'>Name: <span className='font-bold'>{data.name}</span>
     </div>
     <div className='m-2 p-2 text-white'>Bio: <span className='font-bold'>{data.bio}</span>
     </div>
     <div className='m-2 p-2 text-white'>Github Repositories: <span className='font-bold'>{data.public_repos}</span>
     </div>
     
    </div>
  )
}

//documentation reactrouter.com

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Empowered-Yuv')
    return res.json()
}