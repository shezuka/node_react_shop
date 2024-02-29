const Config = {
    listen_port: parseInt(process.env.LISTEN_PORT as string),
    database: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
    }
};

export default Config;
