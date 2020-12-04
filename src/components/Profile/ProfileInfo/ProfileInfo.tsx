import React from 'react';

import { ProfilePropsType } from '../../../redux/profile-reducer'

import styles from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
  profile: ProfilePropsType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div>
      <div className={styles.profileInfoWrapper}>
        <img src={props.profile.avatar} alt='profile-avatar' />
        <div className={styles.profileInfoDescription}>
          <div className={styles.profileInfoName}>{props.profile.name}</div>
          <div className={styles.profileInfoLocation}>{props.profile.location}</div>

          <div className={styles.profileInfoStatus}>
            {props.profile.status}
          </div>
          <div className={styles.titleAboutMe}>Pra mianie</div>
          <div>{props.profile.about}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;