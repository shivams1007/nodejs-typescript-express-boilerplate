import path from "path";
import { createLogger, format, transports } from "winston";

const time = () => {
    const currentTime = new Date();
    const currentOffset = currentTime.getTimezoneOffset();
    const ISTOffset = 330;   // IST offset UTC +5:30
    const ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    return ISTTime;
};

export const logger = createLogger({
    transports: [
        new transports.File({
            filename: path.join(__dirname, '../logs/http.log'),
            level: 'info',
        }),
        new transports.Http({
            level: 'warn',
            format: format.json()
        }),
    ],
    format: format.printf(info => {
        const log = (JSON.stringify(info.message));
        const message = `${time()} | ${info.level.toUpperCase()} | ${log} `;
        return message;
    })
});
