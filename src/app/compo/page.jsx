const data=async()=>{
    const api=await fetch('https://jsonplaceholder.typicode.com/posts');
    const res=await api.json();
    return res;
}


const page = async() => {
    const res=await data();
    console.log(res)
  return (
    <>
      {
        res.map((item,id)=>{
            return <>
            id:<div key={id}>

            title:<h1>{item.title}</h1>
            body:<p>{item.body}</p>
            </div>

            </>
        })
      }
    </>
  )
}

export default page
