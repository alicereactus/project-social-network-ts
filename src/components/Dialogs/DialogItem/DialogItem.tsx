import React from 'react';
import { NavLink } from 'react-router-dom';
import {DialogType} from '../../../redux/state';
import s from './../Dialogs.module.css';

const DialogItem = (props: DialogType) => {
  let path = '/paviedamliennia/' + props.id

  return (
    <div className={s.dialog}>
      <img src={props.avatar} />
      <div className={s.dialogName}><NavLink to={path}>{props.name}</NavLink></div>
    </div>
  )
}

export default DialogItem;