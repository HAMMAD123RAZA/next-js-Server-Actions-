import DB from "../lib/DB"
import post from "../models/post"


const create=async(formdata)=>{
    "use server"
 await DB()

 const api=post.create({
    title:formdata.get("title"),
    body:formdata.get("body")
 })
 console.log("result",api)
}


const PostData = () => {
  return (
    <>
      <form action={create}  >
        <input type="text" name="title"  />
        <input type="text" name="body"  />
            <button type="submit"  >add</button>
      </form>
    </>
  )
}

export default PostData
