(this["webpackJsonpproject-social-network-ts"]=this["webpackJsonpproject-social-network-ts"]||[]).push([[0],{126:function(e,t,s){e.exports={newsWrapper:"News_newsWrapper__3-cY-"}},127:function(e,t,s){e.exports={musicWrapper:"Music_musicWrapper__Scmzr"}},128:function(e,t,s){e.exports={settingsWrapper:"Settings_settingsWrapper__1AxH3"}},142:function(e,t,s){},17:function(e,t,s){e.exports={nav:"Navbar_nav__3-cuk",item:"Navbar_item__x_ljn",activeLink:"Navbar_activeLink__3XFbk"}},20:function(e,t,s){e.exports={profileInfoWrapper:"ProfileInfo_profileInfoWrapper__B0neG",profileInfoDescription:"ProfileInfo_profileInfoDescription__11z_i",profileInfoName:"ProfileInfo_profileInfoName__3mdRo",profileInfoContacts:"ProfileInfo_profileInfoContacts__3MmTM",profileInfoJobStatus:"ProfileInfo_profileInfoJobStatus__29Ezs",title:"ProfileInfo_title__2XIBk"}},258:function(e,t,s){},259:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),i=s.n(a),r=s(62),o=s.n(r),c=s(11),l=s(10),u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,278)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),i(e),r(e)}))},d=s(9),j=(s(142),s(17)),p=s.n(j),b=function(){return Object(n.jsxs)("nav",{className:p.a.nav,children:[Object(n.jsx)("div",{className:p.a.item,children:Object(n.jsx)(c.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Prafajl"})}),Object(n.jsx)("div",{className:p.a.item,children:Object(n.jsx)(c.b,{to:"/paviedamliennia",activeClassName:p.a.activeLink,children:"Paviedamliennia"})}),Object(n.jsx)("div",{className:p.a.item,children:Object(n.jsx)(c.b,{to:"/users",activeClassName:p.a.activeLink,children:"Siabry"})}),Object(n.jsx)("div",{className:p.a.item,children:Object(n.jsx)(c.b,{to:"/muzyka",activeClassName:p.a.activeLink,children:"Muzyka"})}),Object(n.jsx)("div",{className:p.a.item,children:Object(n.jsx)(c.b,{to:"/naviny",activeClassName:p.a.activeLink,children:"Naviny"})}),Object(n.jsx)("div",{className:p.a.item,children:Object(n.jsx)(c.b,{to:"/nalady",activeClassName:p.a.activeLink,children:"Nalady"})})]})},f=s(126),m=s.n(f),g=function(){return Object(n.jsx)("div",{className:m.a.newsWrapper,children:"Naviny"})},h=s(127),O=s.n(h),v=function(){return Object(n.jsx)("div",{className:O.a.musicWrapper,children:"Muzyka"})},x=s(128),_=s.n(x),k=function(){return Object(n.jsx)("div",{className:_.a.settingsWrapper,children:"Nalady"})},N=s(8),I=s(42),P=s(4),y=s(275),S="SEND-MESSAGE",w={messages:[{id:Object(y.a)(),message:"Pryvitannie!",time:"22:00"},{id:Object(y.a)(),message:"Jak tvaje spravy?",time:"10:00"},{id:Object(y.a)(),message:"Au, adka\u017ey)",time:"11:00"},{id:Object(y.a)(),message:"Usio vydatna) Jak ty?",time:"12:00"},{id:Object(y.a)(),message:"Taksama \u016dsio dobra)",time:"13:00"}],dialogs:[{id:Object(y.a)(),name:"Hanna",avatar:"https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg"},{id:Object(y.a)(),name:"Pa\u016dlinka",avatar:"https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540"},{id:Object(y.a)(),name:"Diejnieris",avatar:"https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg"},{id:Object(y.a)(),name:"Wujtek",avatar:"https://avatarko.ru/img/kartinka/33/serial_Game_of_Thrones_32744.jpg"},{id:Object(y.a)(),name:"Lech",avatar:"https://avatarko.ru/img/kartinka/6/serial_Game_of_Thrones_5983.jpg"},{id:Object(y.a)(),name:"Karol",avatar:"https://pm1.narvii.com/7377/ec4eea9404ef6004a52cadac44ed1dc33c28e16br1-600-800v2_uhq.jpg"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,s=Object(P.a)({},e);switch(t.type){case S:var n={id:Object(y.a)(),message:t.newMessageBody.trim(),time:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):(new Date).getMinutes())};return""!==n.message&&(s=Object(P.a)(Object(P.a)({},e),{},{messages:[].concat(Object(I.a)(e.messages),[n])})),s;default:return e}},M=s(93),A=s.n(M),U=function(e){var t="/paviedamliennia/"+e.id;return Object(n.jsxs)("div",{className:A.a.dialog,children:[Object(n.jsx)("img",{src:e.avatar,alt:"dialog"}),Object(n.jsx)("div",{className:A.a.dialogName,children:Object(n.jsx)(c.b,{to:t,children:e.name})})]})},D=s(68),E=s.n(D),L=function(e){return Object(n.jsxs)("div",{className:"Usio vydatna) Jak ty?"===e.message?E.a.message:E.a.myMessage,children:[e.message,Object(n.jsx)("div",{className:E.a.messageTime,children:e.time})]})},T=s(69),F=s.n(T),W=s(274),B=s(273),J=function(e){if(!e)return"Field is required"},z=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},R=s(36),G=s(53),H=s.n(G),X=function(e){var t=e.input,s=e.meta,a=Object(R.a)(e,["input","meta"]);console.log(s);var i=s.touched&&s.error;return Object(n.jsxs)("div",{className:H.a.formControl+" "+(i?H.a.error:""),children:[Object(n.jsx)("textarea",Object(P.a)(Object(P.a)({},t),a)),i&&Object(n.jsx)("span",{children:s.error})]})},K=function(e){var t=e.input,s=e.meta,a=Object(R.a)(e,["input","meta"]),i=s.touched&&s.error;return Object(n.jsxs)("div",{className:H.a.formControl+" "+(i?H.a.error:""),children:[Object(n.jsx)("input",Object(P.a)(Object(P.a)({},t),a)),i&&Object(n.jsx)("span",{children:s.error})]})},V=s(70),Y=s.n(V),q=z(500),Q=Object(B.a)({form:"dialogsAddMessageForm"})((function(e){var t=e.handleSubmit;return Object(n.jsxs)("form",{className:Y.a.sendMessage,onSubmit:t,children:[Object(n.jsx)("div",{className:Y.a.sendMessageText,children:Object(n.jsx)(W.a,{name:"newMessageBody",component:X,placeholder:"Enter your message",wrap:"hard",validate:[J,q]})}),Object(n.jsx)("div",{className:Y.a.sendMessageBtn,children:Object(n.jsx)("button",{children:"Adpravi\u0107"})})]})})),Z=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(n.jsx)(U,{id:e.id,name:e.name,avatar:e.avatar},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(n.jsx)(L,{id:e.id,message:e.message,time:e.time},e.id)}));return Object(n.jsxs)("div",{className:F.a.dialogsWrapper,children:[Object(n.jsx)("div",{className:F.a.dialogsItems,children:t}),Object(n.jsx)("div",{className:F.a.messages,children:s}),Object(n.jsx)(Q,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},$=function(e){return{isAuth:e.auth.isAuth}};function ee(e){return Object(l.b)($,{fake:function(){}})((function(t){var s=t.isAuth,a=(t.fake,Object(R.a)(t,["isAuth","fake"]));return s?Object(n.jsx)(e,Object(P.a)({},a)):Object(n.jsx)(d.a,{to:"/login"})}))}var te=Object(N.d)(Object(l.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:S,newMessageBody:e}}(t))}}})),ee)(Z),se=s(29),ne=s(30),ae=s(32),ie=s(31),re=s(130),oe=s.n(re).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"9aa516cb-8f4b-45f8-be8d-59445844c51c"}}),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return oe.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},le=function(e){return oe.post("follow/".concat(e),{}).then((function(e){return e.data}))},ue=function(e){return oe.delete("follow/".concat(e)).then((function(e){return e.data}))},de=function(e){return oe.get("profile/"+e).then((function(e){return e.data}))},je=function(e){return oe.get("profile/status/"+e).then((function(e){return e.data}))},pe=function(e){return oe.put("profile/status",{status:e}).then((function(e){return e.data}))},be=function(){return oe.get("auth/me").then((function(e){return e.data}))},fe="FOLLOW",me="UNFOLLOW",ge="SET-USERS",he="SET-CURRENT-PAGE",Oe="SET-TOTAL-USERS-COUNT",ve="TOGGLE-IS-FETCHING",xe="TOGGLE-IS-FOLLOWING-PROGRESS",_e={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},ke=function(e){return{type:Oe,totalUsersCount:e}},Ne=function(e){return{type:ve,isFetching:e}},Ie=function(e,t){return{type:xe,isFetching:e,userId:t}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(P.a)(Object(P.a)({},e),{},{followed:!0}):e}))});case me:return Object(P.a)(Object(P.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(P.a)(Object(P.a)({},e),{},{followed:!1}):e}))});case ge:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case he:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case Oe:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalUsersCount});case ve:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case xe:return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ye=s(277),Se=s(272),we=Object(Se.a)({nav:{display:"flex",justifyContent:"center",marginBottom:"13px"},ul:{listStyle:"none",padding:0,margin:0,display:"flex",color:"white"}});function Ce(e){var t=we(),s=Object(ye.a)({count:e.totalCount}).items;return Object(n.jsx)("nav",{className:t.nav,children:Object(n.jsx)("ul",{className:t.ul,children:s.map((function(t,s){var a=t.page,i=t.type,r=t.selected,o=Object(R.a)(t,["page","type","selected"]),c=null;return c="start-ellipsis"===i||"end-ellipsis"===i?"\u2026":"page"===i?Object(n.jsx)("button",Object(P.a)(Object(P.a)({type:"button",style:{fontWeight:r?"bold":void 0,fontSize:"20px",marginRight:"7px"}},o),{},{children:a})):Object(n.jsx)("button",Object(P.a)(Object(P.a)({type:"button",style:{fontSize:"20px",marginRight:"7px"}},o),{},{children:i})),Object(n.jsx)("li",{onClick:function(t){e.onPageChanged(a)},children:c},s)}))})})}var Me=s.p+"static/media/user-icon.81251c2b.png",Ae=s(37),Ue=s.n(Ae),De=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),s=[],a=1;a<=t;a++)s.push(a);return Object(n.jsxs)("div",{children:[e.users.map((function(t){return Object(n.jsxs)("div",{className:Ue.a.userItem,children:[Object(n.jsx)("div",{children:Object(n.jsx)(c.b,{to:"/profile/"+t.id,children:Object(n.jsx)("img",{src:null!==t.photos.small?t.photos.small:Me,alt:"friend"})})}),Object(n.jsxs)("div",{className:Ue.a.userItemProfileInfo,children:[Object(n.jsx)("div",{className:Ue.a.userItemName,children:t.name}),Object(n.jsx)("div",{className:Ue.a.userItemLocation,children:"props.location"}),Object(n.jsx)("div",{className:Ue.a.userItemStatus,children:"props.status"})]}),Object(n.jsx)("div",{className:Ue.a.followBtn,children:t.followed?Object(n.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},style:{backgroundColor:"grey"},children:"Unfollow"}):Object(n.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]},t.id)})),Object(n.jsx)("div",{children:Object(n.jsx)(Ce,{totalCount:t,onPageChanged:e.onPageChanged})})]})},Ee=s.p+"static/media/preloader.f88c1339.svg",Le=function(){return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)("img",{src:Ee,alt:"preloader"})})},Te=function(e){Object(ae.a)(s,e);var t=Object(ie.a)(s);function s(){var e;Object(se.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(ne.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)(Le,{}):null,Object(n.jsx)(De,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged})]})}}]),s}(i.a.Component),Fe=Object(N.d)(ee,Object(l.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{getUsers:function(e,t){return function(s){s(Ne(!0)),ce(e,t).then((function(e){var t;s(Ne(!1)),s((t=e.items,{type:ge,users:t})),s(ke(e.totalCount))}))}},follow:function(e){return function(t){t(Ie(!0,e)),le(e).then((function(s){0===s.resultCode&&t({type:fe,userID:e}),t(Ie(!1,e))}))}},unfollow:function(e){return function(t){t(Ie(!0,e)),ue(e).then((function(s){0===s.resultCode&&t({type:me,userID:e}),t(Ie(!1,e))}))}},setCurrentPage:function(e){return{type:he,currentPage:e}},setTotalUsersCount:ke,toggleIsFollowingProgress:Ie}))(Te),We="ADD-POST",Be="LIKE-POST",Je="UNLIKE-POST",ze="SET-USER-PROFILE",Re="SET-STATUS",Ge={profile:{aboutMe:"",contacts:{facebook:"",website:"",vk:"",instagram:"",youtube:"",github:"",mainLink:""},lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",userId:NaN,photos:{small:"",large:""}},status:"",posts:[{id:Object(y.a)(),message:"Siabry, planuju sustre\u010du z vami. Napi\u0161ycie mnie)",time:"22:00",liked:!0,likesCount:12},{id:Object(y.a)(),message:"Siabry, zapra\u0161aju \u016dsich na kancert siaredniavie\u010dnaj muzyki",time:"23:00",liked:!1,likesCount:11}]},He=function(e){return{type:Re,status:e}},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,s=Object(P.a)({},e);switch(t.type){case We:var n={id:Object(y.a)(),message:t.newPostText.trim(),time:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):(new Date).getMinutes()),liked:!1,likesCount:0};return""!==n.message&&(s=Object(P.a)(Object(P.a)({},e),{},{posts:[].concat(Object(I.a)(e.posts),[n])})),s;case Be:return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.postID?Object(P.a)(Object(P.a)({},e),{},{liked:!0,likesCount:e.likesCount+1}):e}))});case Je:return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.map((function(e){return e.id===t.postID?Object(P.a)(Object(P.a)({},e),{},{liked:!1,likesCount:e.likesCount-1}):e}))});case ze:return Object(P.a)(Object(P.a)({},e),{},{profile:t.profile});case Re:return Object(P.a)(Object(P.a)({},e),{},{status:t.status});default:return e}},Ke=s(43),Ve=s.n(Ke),Ye=function(e){return Object(n.jsxs)("div",{className:Ve.a.postItemWrapper,children:[Object(n.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg",alt:"post"}),Object(n.jsxs)("div",{className:Ve.a.postItem,children:[e.message,Object(n.jsxs)("div",{className:Ve.a.postLikeTimeWrapper,children:[Object(n.jsxs)("div",{className:Ve.a.postLike,children:[e.liked?Object(n.jsx)("button",{onClick:function(){e.unlike(e.id)},children:Object(n.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/A_perfect_SVG_heart.svg/342px-A_perfect_SVG_heart.svg.png",alt:"like",style:{width:"10px",height:"10px"}})}):Object(n.jsx)("button",{onClick:function(){return e.like(e.id)},children:Object(n.jsx)("img",{src:"https://www.clipartmax.com/png/middle/32-325427_heart-icon-svg-heart-png-transparent-background.png",alt:"unlike",style:{width:"10px",height:"10px"}})}),Object(n.jsx)("span",{children:e.likesCount})]}),Object(n.jsx)("div",{className:Ve.a.postTime,children:e.time})]})]})]})},qe=s(44),Qe=s.n(qe),Ze=z(500),$e=Object(B.a)({form:"profileAddNewPostFrom"})((function(e){return Object(n.jsxs)("form",{className:Qe.a.addPost,onSubmit:e.handleSubmit,children:[Object(n.jsx)("div",{children:Object(n.jsx)(W.a,{name:"newPostText",component:X,placeholder:"Enter your message",wrap:"hard",validate:[J,Ze]})}),Object(n.jsx)("div",{className:Qe.a.addPostBtn,children:Object(n.jsx)("button",{children:"Dada\u0107 post"})})]})})),et=function(e){var t=e.posts.map((function(t){return Object(n.jsx)(Ye,{id:t.id,message:t.message,time:t.time,liked:t.liked,likesCount:t.likesCount,like:e.like,unlike:e.unlike},t.id)})).reverse();return Object(n.jsxs)("div",{className:Qe.a.postsWrapper,children:[Object(n.jsx)("div",{className:Qe.a.postsTitle,children:"Maje pasty"}),Object(n.jsx)($e,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(n.jsx)("div",{className:Qe.a.posts,children:t})]})},tt=Object(l.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:We,newPostText:e}}(t))},like:function(t){e(function(e){return{type:Be,postID:e}}(t))},unlike:function(t){e(function(e){return{type:Je,postID:e}}(t))}}}))(et),st=s(132),nt=s(65),at=s(20),it=s.n(at),rt=function(e){Object(ae.a)(s,e);var t=Object(ie.a)(s);function s(){var e;Object(se.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){console.log("this",Object(nt.a)(e)),e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateUserStatus(e.state.status)},e.onStatusChange=function(t){e.setState({status:t.currentTarget.value})},e}return Object(ne.a)(s,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status}),console.log("componentDidUpdate")}},{key:"render",value:function(){return console.log("render"),Object(n.jsxs)("div",{className:it.a.profileInfoStatus,children:[Object(n.jsx)("div",{className:it.a.title,children:"Status"}),!this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"No status"})}),this.state.editMode&&Object(n.jsx)("div",{children:Object(n.jsx)("input",{autoFocus:!0,value:this.state.status,onBlur:this.deactivateEditMode,onChange:this.onStatusChange})})]})}}]),s}(i.a.Component),ot=function(e){var t,s=[];return e.profile&&Object.entries(e.profile.contacts).forEach((function(e){var t=Object(st.a)(e,2),a=t[0],i=t[1];return s.push(Object(n.jsx)("div",{children:null!==i&&""!==i?"".concat(a,": ").concat(i):""},a))})),(null===(t=e.profile)||void 0===t?void 0:t.fullName)?Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:it.a.profileInfoWrapper,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e.profile.photos.large,alt:"user"})}),Object(n.jsxs)("div",{className:it.a.profileInfoDescription,children:[Object(n.jsx)("div",{className:it.a.profileInfoName,children:e.profile.fullName}),Object(n.jsx)(rt,{status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsxs)("div",{className:it.a.profileInfoJobStatus,children:[Object(n.jsx)("div",{className:it.a.title,children:"Looking for a job status"}),Object(n.jsx)("div",{children:e.profile.lookingForAJobDescription})]}),Object(n.jsx)("div",{className:it.a.title,children:"Pra mianie"}),Object(n.jsx)("div",{children:e.profile.aboutMe}),Object(n.jsx)("div",{className:it.a.title,children:"My contacts"}),Object(n.jsx)("div",{className:it.a.profileInfoContacts,children:s})]})]})}):Object(n.jsx)(Le,{})},ct=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(ot,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(n.jsx)(tt,{})]})},lt=function(e){Object(ae.a)(s,e);var t=Object(ie.a)(s);function s(){return Object(se.a)(this,s),t.apply(this,arguments)}return Object(ne.a)(s,[{key:"componentDidMount",value:function(){var e=Number(this.props.match.params.userId);e||(e=13052),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(ct,Object(P.a)(Object(P.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))})}}]),s}(i.a.Component),ut=Object(N.d)(ee,d.f,Object(l.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),{getUserProfile:function(e){return function(t){de(e).then((function(e){t({type:ze,profile:e})}))}},getUserStatus:function(e){return function(t){je(e).then((function(e){t(He(e))}))}},updateUserStatus:function(e){return function(t){pe(e).then((function(s){0===s.resultCode&&t(He(e))}))}}}))(lt),dt=s(72),jt=s.n(dt),pt=function(e){return Object(n.jsxs)("header",{className:jt.a.header,children:[Object(n.jsxs)("div",{className:jt.a.logo,children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(n.jsx)("div",{children:"DOSVIED"})]}),Object(n.jsx)("div",{className:jt.a.loginBlock,children:e.isAuth?e.login:Object(n.jsx)(c.b,{to:"/login",children:"Login"})})]})},bt="SET-USER-DATA",ft={id:null,login:null,email:null,isAuth:!1},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case bt:return Object(P.a)(Object(P.a)(Object(P.a)({},e),t.data),{},{isAuth:!0});default:return e}},gt=function(e){Object(ae.a)(s,e);var t=Object(ie.a)(s);function s(){return Object(se.a)(this,s),t.apply(this,arguments)}return Object(ne.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(n.jsx)(pt,Object(P.a)(Object(P.a)({},this.props),{},{isAuth:this.props.isAuth,login:this.props.login}))}}]),s}(i.a.Component),ht=Object(l.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:function(){return function(e){be().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.login,i=s.email;e(function(e,t,s){return{type:bt,data:{id:e,login:t,email:s}}}(n,a,i))}}))}}})(gt),Ot=Object(B.a)({form:"login"})((function(e){var t=e.handleSubmit;return Object(n.jsxs)("form",{onSubmit:t,children:[Object(n.jsx)("div",{children:Object(n.jsx)(W.a,{placeholder:"Login",component:K,validate:[J],name:"login"})}),Object(n.jsx)("div",{children:Object(n.jsx)(W.a,{placeholder:"Password",component:K,validate:[J],name:"password"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(W.a,{component:K,type:"checkbox",validate:[J],name:"rememberMe"}),Object(n.jsx)("span",{children:"Remember me"})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{children:"Sign in"})})]})})),vt=function(){return Object(n.jsxs)("div",{style:{color:"white"},children:[Object(n.jsx)("h1",{children:"LOGIN"}),Object(n.jsx)(Ot,{onSubmit:function(e){console.log(e)}})]})},xt=function(){return Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(ht,{}),Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(d.b,{path:"/login",render:function(){return Object(n.jsx)(vt,{})}}),Object(n.jsx)(d.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(ut,{})}}),Object(n.jsx)(d.b,{path:"/paviedamliennia",render:function(){return Object(n.jsx)(te,{})}}),Object(n.jsx)(d.b,{path:"/users",render:function(){return Object(n.jsx)(Fe,{})}}),Object(n.jsx)(d.b,{path:"/muzyka",render:function(){return Object(n.jsx)(v,{})}}),Object(n.jsx)(d.b,{path:"/naviny",render:function(){return Object(n.jsx)(g,{})}}),Object(n.jsx)(d.b,{path:"/nalady",render:function(){return Object(n.jsx)(k,{})}})]})]})},_t=s(131),kt=s(276),Nt=Object(N.c)({profilePage:Xe,dialogsPage:C,usersPage:Pe,auth:mt,form:kt.a}),It=Object(N.e)(Nt,Object(N.a)(_t.a));window.store=It;var Pt=It;s(258);o.a.render(Object(n.jsx)(c.a,{children:Object(n.jsx)(l.a,{store:Pt,children:Object(n.jsx)(xt,{})})}),document.getElementById("root")),u()},37:function(e,t,s){e.exports={userItem:"Users_userItem__eCCMF",userItemProfileInfo:"Users_userItemProfileInfo__36CwY",userItemName:"Users_userItemName__3hV6N",userItemLocation:"Users_userItemLocation__20fC_",userItemStatus:"Users_userItemStatus__MWYo0",followBtn:"Users_followBtn__1Fd6o",page:"Users_page__vn_N3",selectedPage:"Users_selectedPage__XvmL9"}},43:function(e,t,s){e.exports={postItemWrapper:"Post_postItemWrapper__wv8zp",postItem:"Post_postItem__1ObWU",postLikeTimeWrapper:"Post_postLikeTimeWrapper__3PlPb",postTime:"Post_postTime__2iSSg",postLike:"Post_postLike__2KK9v"}},44:function(e,t,s){e.exports={postsWrapper:"MyPosts_postsWrapper__11fSe",postsTitle:"MyPosts_postsTitle__8uBBk",addPost:"MyPosts_addPost__3K3IL",addPostBtn:"MyPosts_addPostBtn__19Iqf",posts:"MyPosts_posts__3Ekdm"}},53:function(e,t,s){e.exports={formControl:"FormControl_formControl__1j-eU",error:"FormControl_error__1Sn2z"}},68:function(e,t,s){e.exports={myMessage:"Message_myMessage__jXAW8",message:"Message_message__w8gMA",messageTime:"Message_messageTime__1fzeP"}},69:function(e,t,s){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__1rfJB",dialogsItems:"Dialogs_dialogsItems__G1zqI",messages:"Dialogs_messages__33zLJ"}},70:function(e,t,s){e.exports={sendMessage:"AddMessageForm_sendMessage__16Ohi",sendMessageText:"AddMessageForm_sendMessageText__2myTY",sendMessageBtn:"AddMessageForm_sendMessageBtn__jPzYd"}},72:function(e,t,s){e.exports={header:"Header_header__tvA4m",logo:"Header_logo__1Zd6y",loginBlock:"Header_loginBlock__11P8n"}},93:function(e,t,s){e.exports={dialog:"DialogItem_dialog__Al22X",dialogName:"DialogItem_dialogName__1UUcL"}}},[[259,1,2]]]);
//# sourceMappingURL=main.7243e6fc.chunk.js.map