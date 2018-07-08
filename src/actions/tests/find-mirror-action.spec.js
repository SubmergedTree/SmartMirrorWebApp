import {FindMirrorActions, FindMirrorTypes} from "../find-mirror-action";

const findMirrorActions = new FindMirrorActions(() => {});

describe('find-mirror actions', () => {
  it('acceptUrl should create ACCEPT_URL action', () => {
    expect(findMirrorActions.acceptUrl('localhost:3000')).toEqual({
      type: FindMirrorTypes.ACCEPT_URL,
      url: 'localhost:3000'
    })
  })
})
