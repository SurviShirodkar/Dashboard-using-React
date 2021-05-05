import React,{useContext} from 'react'
import { constantarray } from '../../../../../constant';
import { MyContext } from '../../../Context/Context'

import './viewparticipant.scss'
import Loadinggif from './animation_640_knrb7u3c.gif'

export default function ViewParticipant() {
const [search,setSearch]= React.useState("");
console.log(search);
const plist= useContext(MyContext); 

    return ( ! plist.participantList?<div><img src={Loadinggif} className="loading-animation"></img></div>:
        <div className="view-participant">
           
            <div className="vp-search">
            <input type="text" placeholder="search" value={search} onChange= {(e)=>setSearch(e.target.value)}></input>
            <button type="submit" >Submit</button>
            </div>
            <div className="vp-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>ticket</th>
                        </tr>
                    </thead>
                   
                        {
plist.participantList.filter( obj => {
    return obj.firstName.includes(search);
}
    
    ).map(obj =>
    <tr  className="table-row">
    <td className="table-name">
        <button className="table-button">{obj.ticket === "vip"?"V":"N"}</button>
        <div className="">
            <h3 className="table-fullname">{obj.firstName}</h3>
            <h5 className="table-state">{obj.state}</h5>
        </div>
    </td>
    <td>{obj.email}</td>
    <td>{obj.ticket}</td>
</tr>
    )
                        }
                       
                  
                </table>
            </div>
          
        </div>
    )
}
