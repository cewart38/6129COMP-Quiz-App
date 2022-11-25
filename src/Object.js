class Object {
    constructor(name, img_dir) {
        this.name = name;
        this.img_dir = img_dir;
    }
    toString() {
        return this.name + ', ' + this.img_dir;
    }
}

const objectConverter = {
    toFirestore: (object) => {
        return{
            name: object.name,
            img_dir: object.img_dir,
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new Object(data.name, data.img_dir);
    }
};