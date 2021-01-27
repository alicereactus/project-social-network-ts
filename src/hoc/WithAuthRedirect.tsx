import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { AppStateType } from '../redux/redux-store'

type MapStateToPropsType = {
    isAuth: boolean
}

type DispatchPropsType = {
    fake: () => void
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {
    debugger
    const RedirectComponent: React.FC<MapStateToPropsType & DispatchPropsType> = (props) => {
        let { isAuth, fake, ...restProps } = props
        if (!isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as WCP} />
    }
    let ConnectedAuthRedirectComponent = connect<MapStateToPropsType, DispatchPropsType, WCP, AppStateType>(mapStateToPropsForRedirect, {fake: () => {}})(RedirectComponent)
    return ConnectedAuthRedirectComponent
}