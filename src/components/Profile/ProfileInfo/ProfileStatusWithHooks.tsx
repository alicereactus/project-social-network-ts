import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <div className={styles.profileInfoStatus}>
            <div className={styles.title}>
                Status
                </div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input value={status} autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;