import { title } from 'process';
import React from 'react';
import { ProfilePropsType } from '../../../redux/state'
import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
  profile: ProfilePropsType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div>
      <div className={s.profileInfoWrapper}>
        <img src={props.profile.avatar} />
        <div className={s.profileInfoDescription}>
          <div className={s.profileInfoName}>{props.profile.name}</div>
          <div className={s.profileInfoLocation}>{props.profile.location}</div>

          <div className={s.profileInfoStatus}>
            {props.profile.status}
          </div>
          <div className={s.titleAboutMe}>Pra mianie</div>
          <div>{props.profile.about}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;