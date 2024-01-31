import DB from "../lib/DB"
import post from "../models/post"


export default async function GetData() {
    await DB
const allpost=post.find()

    return (
        <>
        {
            allpost.map((el,id)=>{
                <div key={id} >
                    <h2>{el.name}</h2>
                    <p>{el.body}</p>
                </div>
            })
        }
        </>
    )
}