// import { log } from 'console';
import { appendFileSync } from 'fs';
import { Payment } from './payments';

class CSVWriter {
  constructor(private steps: any) {
    this.csv = this.steps.join(',') + '\n';
  }
  private csv: string;

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = '\n';

    console.log('File save to', filename);
  }
  addLine(values: Payment[]): void {
    let line = values.map((v) => this.formatLine(v));
    this.csv += line.join('\n');
    console.log(this.csv);
  }
  private formatLine(m: Payment): string {
    return this.steps.map((step: any) => m).join(',');
  }
}

export { CSVWriter };
