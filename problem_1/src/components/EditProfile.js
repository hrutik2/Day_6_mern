export const EditProfile=({name,email})=>{
    return(
        <div>
            <input value={name} readOnly></input>
            <br/>
            <input value={email} readOnly></input>
            <br/>
            <button>submit</button>
        </div>
    )
}