import React, { ChangeEvent } from 'react';
import styles from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this', this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={styles.profileInfoStatus}>
                <div className={styles.title}>
                    Status
                </div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} ></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;