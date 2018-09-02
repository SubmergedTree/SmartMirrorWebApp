import {errorReducer} from '../../reducer/error-reducer'
import {ERROR} from '../../actions/error-action'


describe('errorReducer', () => {
    it('should return the initial state', () => {
        expect(errorReducer(undefined, {})).toEqual(
            {
                errors: []
            })
    });

    it('should add a new error to state', () => {
        expect(errorReducer({errors: []}, {
            type: ERROR.NEW_ERROR,
            id: 1,
            name: 'foo',
            desc: 'bar' 
        })).toEqual(
            {
                errors: [
                    {
                        id: 1,
                        name: 'foo',
                        desc: 'bar'
                    }
                ]
            })
    });

    it('should resolve an error', () => {
        expect(errorReducer({errors: [
            {
                id: 1,
                name: 'foo',
                desc: 'bar'
            }
        ]}, {
            type: ERROR.RESOLVE_ERROR,
            id: 1
        })).toEqual(
            {
                errors: []
            })
    });

    describe('error to erase does not exist', () => {
        it('should not alter the state', () => {
            expect(errorReducer({errors: [
                {
                    id: 1,
                    name: 'foo',
                    desc: 'bar'
                }
            ]}, {
                type: ERROR.RESOLVE_ERROR,
                id: 3
            })).toEqual(
                {
                    errors: [{
                        id: 1,
                        name: 'foo',
                        desc: 'bar'
                    }]
                })
        });
    });

    it('should resolve all errors', () => {
        expect(errorReducer({errors: [
            {
                id: 1,
                name: 'foo',
                desc: 'bar'
            },
            {
                id: 2,
                name: 'foo',
                desc: 'bar'
            }
        ]}, {
            type: ERROR.RESOLVE_ALL
        })).toEqual(
            {
                errors: []
            })
    });
});