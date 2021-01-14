import React from 'react';

import { ProfileType } from '../../../redux/profile-reducer'
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'

import styles from './ProfileInfo.module.css';

export type ProfileInfoPropsType = {
  profile: ProfileType | null
  status: string
  updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

  let contacts: Array<any> = []
  props.profile && Object.entries(props.profile.contacts).forEach(([key, value]) => contacts.push(<div key={key}>{value !== null && value !== '' ? `${key}: ${value}` : ``}</div>))

  if (!props.profile?.fullName) {
    return <Preloader />
  }

  return (
    <div>
      <div className={styles.profileInfoWrapper}>
        <div>
          <img src={props.profile.photos.large} alt='user' />
        </div>
        <div className={styles.profileInfoDescription}>
          <div className={styles.profileInfoName}>{props.profile.fullName}</div>
          <ProfileStatus status={props.status}  updateUserStatus={props.updateUserStatus} />
          <div className={styles.profileInfoJobStatus}>
            <div className={styles.title}>Looking for a job status</div>
            <div>{props.profile.lookingForAJobDescription}</div>
          </div>
          <div className={styles.title}>Pra mianie</div>
          <div>{props.profile.aboutMe}</div>
          <div className={styles.title}>My contacts</div>
          <div className={styles.profileInfoContacts}>{contacts}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;