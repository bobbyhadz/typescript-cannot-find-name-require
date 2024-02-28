export {};

// Cannot find name 'require' or 'process' Error in TypeScript

declare let require: any;

const DB_PASSWORD = process.env.DB_PASSWORD;
