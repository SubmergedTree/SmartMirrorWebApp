import {newError, resolveError, resolveAllErrors, ERROR} from "../../actions/error-action";
import expect from 'expect'

describe('error-action', () => {
    afterEach(() => {
        resolveAllErrors()
    });

    describe('newError', () => {

        it('should create new error and post increment global error id', () =>{
            expect(newError('foo1', 'foo2')).toEqual({
                type: ERROR.NEW_ERROR,
                id: 0,
                name: 'foo1',
                desc: 'foo2'
              });
    
              expect(newError('bar1', 'bar2')).toEqual({
                type: ERROR.NEW_ERROR,
                id: 1,
                name: 'bar1',
                desc: 'bar2'
              });
        });
    });
    
    
    describe('resolveError', () => {
        it('should return resolve error type and id of error ', () => {
            newError('foo1', 'foo2');
            newError('bar1', 'bar2');

            expect(resolveError(1)).toEqual({
                type: ERROR.RESOLVE_ERROR,
                id: 1
            });
    
        });
    });
    
    
    describe('resolveAllErrors', () => {
        it('should return resolve all errors type and reset global error id', () => {
            newError('foo1', 'foo2');
            newError('bar1', 'bar2');

            expect(resolveAllErrors()).toEqual({
                type: ERROR.RESOLVE_ALL
            });

            expect(newError('a', 'b')).toEqual({
                type: ERROR.NEW_ERROR,
                id: 0,
                name: 'a',
                desc: 'b'
              });
        });
    });
});
