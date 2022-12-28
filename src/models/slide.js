export default class Slide {
    _id;
    _title;
    _description;
    _image;
    _needPadding;
    constructor(id, title, description, image, needPadding) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._image = image;
        this._needPadding = needPadding;
    }

    get id() {
        return this._id;
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
    get needPadding() {
        return this._needPadding;
    }
}
