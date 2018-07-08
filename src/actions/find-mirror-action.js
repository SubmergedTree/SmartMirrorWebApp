export const FindMirrorTypes = {
    ACCEPT_URL: "ACCEPT_URL",
    VALIDATE_STATUS: "VALIDATE_STATUS"
};


export class FindMirrorActions {
    constructor(restRequest) {
        this.restRequest = restRequest;
    }

    mirrorStatus(url) {
        return this.restRequest(url, (response, body) => ({
           type: FindMirrorTypes.VALIDATE_STATUS,
           error: "invalide url"
        }), (response, body) => ({
            type: '',
            status: body.status
        }));
    }

    acceptUrl(url) {
        return {
            type: FindMirrorTypes.ACCEPT_URL,
            url: url
        };
    }
}
