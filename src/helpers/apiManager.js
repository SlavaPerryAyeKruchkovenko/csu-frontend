import Mock from '@Helpers/mock';

export class ApiManager {
    _mode;
    constructor(mode) {
        this._mode = mode;
    }

    get slides() {
        if (this._mode === API_STATUS.DEBUG) {
            return Mock.slides();
        }
        if (this._mode === API_STATUS.RELEASE) {
            return;
        }
        throw new Error('inccorect mode');
    }
    get services() {
        if (this._mode === API_STATUS.DEBUG) {
            return Mock.services();
        } else if (this._mode === API_STATUS.RELEASE) {
        } else {
            throw new Error('inccorect mode');
        }
    }
}
export const API_STATUS = {
    DEBUG: 'debug',
    RELEASE: 'release',
};
