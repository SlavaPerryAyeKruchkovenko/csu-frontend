export default class Slide {
    _id;
    _title;
    _description;
    _image;
    constructor(id, title, description, image) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._image = image;
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
}
