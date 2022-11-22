import multer from 'multer'
import fs from 'fs'

export class Multer {
    storage: any;
    fileFilter: any;
    constructor(private dir: string) {
        this.storage = multer.diskStorage({
            destination: (req, file, cb) => {
                fs.mkdirSync(this.dir, { recursive: true })
                cb(null, this.dir);
            },
            filename: (req, file, cb) => {
                const file_extension = file.originalname.split(".")[1];
                cb(null, this.fileName + '.' + file_extension)
            }
        });
    }

    get upload() {
        return multer({ storage: this.storage });
    }

    private get fileName() {
        const d = new Date();
        const curr_date = d.getDate();
        const curr_month = d.getMonth() + 1;
        const curr_year = d.getFullYear();
        const seconds = d.getSeconds();
        const minutes = d.getMinutes();
        const hour = d.getHours();
        const milisec = d.getMilliseconds();
        return curr_year.toString() + curr_month.toString() + curr_date.toString() + hour.toString() + minutes.toString() + seconds.toString() + milisec.toString();
    }

}