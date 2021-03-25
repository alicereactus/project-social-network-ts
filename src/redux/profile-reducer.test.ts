import profileReducer, { AddPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: NaN,
        photos: {
            small: '',
            large: ''
        }
    },
    status: '',
    posts: [
        { id: '1', message: 'Siabry, planuju sustreču z vami. Napišycie mnie)', time: '22:00', liked: true, likesCount: 12 },
        { id: '2', message: "Siabry, zaprašaju ŭsich na kancert siaredniaviečnaj muzyki", time: '23:00', liked: false, likesCount: 11 }
    ]
}

test('new post should be added', () => {
    // 2. action
    let action = AddPostActionCreator('it-incubator')
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    // 2. action
    let action = AddPostActionCreator('it-incubator')
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('it-incubator')
})

test("after deleting length of messages should be decremented", () => {
    let action = deletePost('1')
    let newStata = profileReducer(state, action)

    expect(newStata.posts.length).toBe(1)
})

test("after deleting length shouldn't be decremented if id is incorrect", () => {
    let action = deletePost('1000')
    let newStata = profileReducer(state, action)

    expect(newStata.posts.length).toBe(2)
})
