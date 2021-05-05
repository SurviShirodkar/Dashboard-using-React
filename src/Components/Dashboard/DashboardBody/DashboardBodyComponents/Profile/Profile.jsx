import React,{useContext,useEffect} from 'react'
import { MyContext } from '../../../Context/Context';
import './profile.scss'
import axios from 'axios'

export default function Profile() {
    const plist = useContext(MyContext);
    const [edit,setEdit]=React.useState(true);
    const[details,setDetails]=React.useState({
        firstName:"",
        lastName:"",
        contact:"",
        email:"",
        city:"",
        state:"",
        event:"",
        gender:"",
        profilePic:""
    });
   
    const ChangeStep = async()=>{
        if(!details){
            return;
        }
        else{
       alert("done");
       console.log(details);
       let res = await axios.put(` https://protected-fjord-14530.herokuapp.com/api/users/${plist.userDetails._id}`);
       console.log(res.data);
     }
    }

    const changeEdit=()=>{
        setEdit(false);
    }
    useEffect(() => {
     if(!plist.userDetails){
        return
     }
     setDetails(plist.userDetails);
    }, [plist.userDetails]);

    return ( !details?<h5>Loading...</h5>:
        <div className="profile">
             <button type="submit"
              className={edit?"edit-button":"edit-button-red"}
              onClick={()=>changeEdit()}>Edit</button>
              <div className="user-detail">
              <img src={!details.profilePic?" https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png ":plist.userDetails.profilePic} height="100px;"></img>
              <div className="email-conta">
             <p>Email :{details.email}</p>
             <p>contact : {details.contact}</p></div>
             </div>
        <form onSubmit={e=>{e.preventDefault(); ChangeStep()}}>
        <div className="form-group">
           
            <div className="form-input">
                <label className="label" >First Name</label>
                <input 
                className="input" 
                type="text" 
                required
                placeholder="Survi" 
                value={details.firstName}
                disabled={edit}
                onChange={(e)=>setDetails({...details,firstName:e.target.value})}
                ></input>
              
            </div>
            <div className="form-input">
                <label className="label" >Last Name</label>
                <input
                className="input" 
                type="text" 
                placeholder="Shirodkar" 
                required
                value={details.lastName}
                disabled={edit}
                onChange={(e)=>setDetails({...details,lastName:e.target.value})}
                ></input>
                
            </div>
        </div>
        {/* <div className="form-group">
            <div className="form-email">
                <label className="label" >Email</label>
                <input 
                className="input" 
                type="text" 
                placeholder="Survishirodkar@gmail.com" 
               required
               value={details.email}
               disabled={edit}
                ></input>
            </div>
        </div> */}
        {/* <div className="form-group">
            <div className="form-email">
                <label className="label" >Contact Number </label>
                <input 
                className="input" 
                type="text" 
                placeholder="9370071402" 
                required
                value={details.contact}
                disabled={edit}
                ></input>
            </div>
        </div> */}
        {/* <div className="form-group">
            <div className="form-input">
                <label className="label" >City</label>
                <input 
                className="input" 
                type="text" 
                placeholder="Bicholim" 
                required
                value={details.city}
                disabled={edit}
                ></input>
            </div>
            <div className="form-input">
            <label className="label" >State</label>
                <input 
                className="input" 
                type="text" 
                placeholder="Goa" 
                required
                value={details.state}
                disabled={edit} 
                ></input>
            </div>
        </div> */}
        <div className="form-group">
            <div className="form-input">
            <label className="label" >ProfilePic Link</label>
            <input
                className="input" 
                type="text" 
                placeholder="survi-shirodkar.jpg" 
                required
                value={details.profilePic}
                disabled={edit}
                onChange={(e)=>setDetails({...details,profilePic:e.target.value})}
                ></input>
            </div> 
            <div className="form-input">
           
                <label className="label" >Gender</label>
               <select className="input" required  value={details.gender}  disabled={edit}  onChange={(e)=>setDetails({...details,gender:e.target.value})} >
                    <option value=""  >please select</option>               
                   <option value="male"  >Male</option>
                   <option value="male"  >Female</option>
               </select>
            </div>
        </div>
       
        <button type="text" className="button">Save</button>
     </form>
     </div>
    )
}
