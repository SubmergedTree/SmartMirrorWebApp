import { mirrorAccepted, getMirrorStatus,
     getUrl, getUsers, getSelectedUser, getSelectedBodyTab, getfileApiIsSupported, getImages } from '../../selectors'


describe('mirrorAccepted', () => {

    it('should return false ', () => {
        const stateMock = {
            urlReducer: {
                url: ''
            }
        };

        expect(mirrorAccepted(stateMock)).toEqual(false);
    });

    it('should return true ', () => {
        const stateMock = {
            urlReducer: {
                url: 'www.example.com'
            }
        };

        expect(mirrorAccepted(stateMock)).toEqual(true);
    });

});


describe('getMirrorStatus', () => {

    it('should return true ', () => {
        const stateMock = {
            mirrorStatus: {
                mirrorFound: true
            }
        };

        expect(getMirrorStatus(stateMock)).toEqual(true);
    });

    it('should return false ', () => {
        const stateMock = {
            mirrorStatus: {
                mirrorFound: false
            }
        };

        expect(getMirrorStatus(stateMock)).toEqual(false);
    });
});


describe('getUrl', () => {

    it('should return url ', () => {
        const stateMock = {
            urlReducer: {
                url: 'www.example.com'
            }
        };

        expect(getUrl(stateMock)).toEqual('www.example.com');
    });
});


describe('getUsers', () => {

    it('should return users ', () => {
        const usersMock = [
            {
                username: "fooUsername",
                name: "fooName",
                prename: 'fooPrename'
            },
            {
                username: "barUsername",
                name: "barName",
                prename: 'barPrename'

            }
        ]

        const stateMock = {
            usersReducer: {
                users: usersMock
            }
        };

        expect(getUsers(stateMock)).toEqual(usersMock);
    });
});

describe('getSelectedUser', () => {

    it('should return selectedUser', () => {
        const stateMock = {
            selectUserReducer: {
                selectedUser: 'foo'
            }
        };
        expect(getSelectedUser(stateMock)).toEqual('foo');
    });

})

describe('getSelectedBodyTab', () => {

    it('should return selected tab', () => {
        const stateMock = {
            bodySelectorReducer: {
                tab: 'IMAGES'
            }
        };
        expect(getSelectedBodyTab(stateMock)).toEqual('IMAGES');
    });

})

describe('getfileApiIsSupported', () => {

    it('should return if file api is supported', () => {
        const stateMock = {
            fileApiIsSupportedReducer: {
                fileApiSupported: true
            }
        };
        expect(getfileApiIsSupported(stateMock)).toEqual(true);
    });

})

describe('getImages', () => {

    it('should return images', () => {
        const stateMock = {
            addImageReducer: {
                images: ["1", "2"]
            }
        };
        expect(getImages(stateMock)).toEqual(["1", "2"]);
    });

})