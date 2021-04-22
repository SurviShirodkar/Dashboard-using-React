import React, { Component, createContext } from 'react'
export const MyContext = createContext();

export  class MyContextProvider extends Component {
      //Here all your global states will come
      state = {
       userDetails: {},
       participantList: undefined

    }
    
    updateUserDetails = (data) => {
        this.setState({userDetails:data})
    }
    updateParticipantList = (list) =>{
        this.setState({participantList:list})
    }

    // //Here all your gloabl functions will be defined.
    // updateFirst = (data) => {
    //     this.setState({ first: data })
    // }
    render() {
        return (
            <MyContext.Provider
                value={{
                    //I'm using spread operator here which passes all the global state
                    ...this.state,
                    // But for function you need to pass each and every one manually
                   updateUserDetails: this.updateUserDetails,
                   updateParticipantList:this.updateParticipantList
                }}
            >
                {/* This say that.. if you wrap any component with this then the value can be passed */}
                {this.props.children}

            </MyContext.Provider>
        )
    }
}
