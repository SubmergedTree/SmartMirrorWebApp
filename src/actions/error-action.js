
export const ERROR = {
    NEW_ERROR: 'NEW_ERROR',
    RESOLVE_ERROR: 'RESOLVE_ERROR',
    RESOLVE_ALL: 'RESOLVE_ALL'
}

let errorId = 0;

export const newError = (name, desc) => {
    return {
        type: ERROR.NEW_ERROR,
        id: errorId++,
        name,
        desc
    }
}

export const resolveError = (id) => {
    return {
        type: ERROR.RESOLVE_ERROR,
        id
    }
}

export const resolveAllErrors = () => {
    errorId = 0;
    return {
        type: ERROR.RESOLVE_ALL
    }
}