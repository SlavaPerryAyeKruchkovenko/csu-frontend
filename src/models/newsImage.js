class NewsImage {
    _title;
    _image;
    constructor(title, image) {
        this._title = title;
        this._image = image;
    }

    get title() {
        return this._title;
    }
    get image() {
        return this._image;
    }
}
export default NewsImage;
