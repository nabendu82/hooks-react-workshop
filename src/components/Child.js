import React from 'react'
import { ChannelContext, UserContext } from '../App'

const Child = () => {
    return (
        <>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {channel => {
                                    return (
                                        <>
                                            <h2>Child component with context value - {user}</h2>
                                            <h3>Channel is - {channel}</h3>
                                        </>
                                    )
                                }}
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </>
    )
}

export default Child
