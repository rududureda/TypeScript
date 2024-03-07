import { appendFileSync } from 'fs';
class CSVWriter {
    constructor(steps) {
        this.steps = steps;
        this.csv = this.steps.join(',') + '\n';
    }
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('File save to', filename);
    }
    addLine(values) {
        let line = values.map((v) => this.formatLine(v));
        this.csv += line.join('\n');
        console.log(this.csv);
    }
    formatLine(m) {
        return this.steps.map((step) => m).join(',');
    }
}
export { CSVWriter };
//# sourceMappingURL=CSVWriter.js.map