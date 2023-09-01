import TimeTable from "./components/TimeTable/TimeTable";
import './index.css';
import { HourItem } from "./models/HourItem";
import { Subject } from "./models/Subject";
import { Weekday } from "./models/Weekday";

const hours: HourItem[] = [
    new HourItem("8:00", "8:45"),
    new HourItem("8:45", "9:30"),
    new HourItem("9:50", "10:35"),
    new HourItem("10:35", "11:20"),
    new HourItem("11:40", "12:25"),
    new HourItem("12:25", "13:10"),
    new HourItem("13:40", "14:25"),
    new HourItem("14:25", "15:10"),
    new HourItem("15:10", "16:00"),
    new HourItem("16:00", "16:45"),
];
const weekdays: Weekday[] = [
    new Weekday("Montag", [
        new Subject("Math", "Thc", "E410"),
        new Subject("Math", "Thc", "E410"),
        new Subject("German", "ABD", "E410"),
        new Subject("German", "ABD", "E410"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
    ]),
    new Weekday("Dienstag", [
        new Subject("IT", "Thc", "E215"),
        new Subject("IT", "Thc", "E215"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
    ]),
    new Weekday("Mittwoch", [
        new Subject("IT", "Thc", "E215"),
        new Subject("IT", "Thc", "E215"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
    ]),
    new Weekday("Donnerstag", [
        new Subject("IT", "Thc", "E215"),
        new Subject("IT", "Thc", "E215"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
    ]),
    new Weekday("Freitag", [
        new Subject("IT", "Thc", "E215"),
        new Subject("IT", "Thc", "E215"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("Biology", "GHJ", "A205"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
        new Subject("English", "JKL", "E410"),
    ]),
];




export default function App(){
    return (
        <div className="timetableCenter">
            <TimeTable hours={hours} weekdays={weekdays} fontfamily="Consolas" accent1="#77ccff" accent2="#aa00ff" accent3="#ffffff"/>
        </div>
    )
}