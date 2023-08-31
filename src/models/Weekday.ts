import type { Subject } from "./Subject";

export class Weekday {
    constructor(
        public name: string,
        public subjects: Subject[]
    ) {}
}