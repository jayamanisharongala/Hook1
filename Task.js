import React , {useState} from 'react'

function Task() {
    const [name, setName] = useState({firstName:'' ,lastName:'' })
   const [trigger,setTrigger]=useState(0)
    return (
        <div>
            <input
            type='text'
            value={name.firstName}
            onChange={e => setName({...name,firstName:e.target.value})}
            />
            <input
            type='text'
            value={name.lastName}
            onChange={e => setName({...name,lastName:e.target.value})}
            /><div>
            <button onClick={()=>setTrigger(1)}>Click To See Name</button>
            {trigger? <h2>Your Full Name is -{name.firstName}{name.lastName}</h2>:null}
            </div>
            </div>
    )
}

export default Task
