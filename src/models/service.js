export default class Service {
    _title;
    _description;
    _image;
    constructor(title, description, image) {
        this._title = title;
        this._description = description;
        this._image = image;
    }

    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get image() {
        return this._image;
    }
}
