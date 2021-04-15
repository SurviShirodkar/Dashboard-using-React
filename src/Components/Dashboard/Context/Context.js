import React, { Component, createContext } from 'react'
export const MyContext = createContext();

export  class MyContextProvider extends Component {
      //Here all your global states will come
      state = {
        first: 'shailesh'
    }

    //Here all your gloabl functions will be defined.
    updateFirst = (data) => {
        this.setState({ first: data })
    }
    render() {
        return (
            <MyContext.Provider
                value={{
                    //I'm using spread operator here which passes all the global state
                    ...this.state,
                    // But for function you need to pass each and every one manually
                    updateFirst: this.updateFirst
                }}
            >
                {/* This say that.. if you wrap any component with this then the value can be passed */}
                {this.props.children}

            </MyContext.Provider>
        )
    }
}
