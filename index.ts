module.exports = {
    Version: "1.0.0",
    Color: "Red",
    Exit: class Exit {
        code: number;
        constructor(code: number) {
            this.code = code;

            console.warn(`Process exiting with exit code ${this.code}`);
            process.exit(this.code);
        }
    },
    Username: "SpeedoThreeSixty",
    Pets: [
        "Daisy",
        "Jack",
        "Leo",
        "Mia"
    ],
    Title: [
        "Developer",
        "Mathematician"
    ],
    Owner: "JavascriptLearner815",
    ModuleLanguage: "TypeScript",
    ProgramLanguage: "JavaScript",
    Prompt: class Prompt {
        text?: string;
        value?: string;
        prompt: string;
        constructor(text?: string, value?: string) {
            this.text = text;
            this.value = value;
            
            if (this.text && this.value) {
                this.prompt = prompt(this.text, this.value);
            } else if (this.text) {
                this.prompt = prompt(this.text);
            } else if (this.value) {
                this.prompt = prompt(null, this.value);
            } else {
                this.prompt = prompt(null);
            }
        }
    }
};
