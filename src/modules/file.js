class File {

    constructor (name, content) {
        this.fileMeta = {
            name: name,
            raw: content
        };
    }

}

export default File;
