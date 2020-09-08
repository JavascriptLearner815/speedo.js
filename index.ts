module.exports = {
    Version: "1.0.0",
    Color: "red",
    Exit: class Exit {
        code: number;
        constructor(code: number) {
            this.code = code;

            console.warn(`Processing exiting with exit code ${this.code}`);
            process.exit(this.code);
        }
    }
};
