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
        new Subject("LK", "LK Lehrer", "LK Raum"),
        new Subject("LK", "LK Lehrer", "LK Raum"),
        new Subject("Geschichte", "SCS. LIN", "E407/E416"),
        new Subject("Geschichte", "SCS. LIN", "E407/E416"),
        new Subject("Deutsch", "STR/HOW/STD", "E404/E407/E416"),
        new Subject("Deutsch", "STR/HOW/STD", "E404/E407/E416"),
        new Subject("Spanisch", "YAR", "E404"),
        new Subject("Spanisch", "YAR", "E404"),
    ]),
    new Weekday("Dienstag", [
        new Subject("Mathe", "WUL", "E416"),
        new Subject("Mathe", "WUL", "E416"),
        new Subject("GK/LK Phy", "E307/E305", "DON/LED"),
        new Subject("GK/LK Phy", "E307/E305", "DON/LED"),
        new Subject("Rel/Eth", "STA/SCÄ", "E405/E414"),
        new Subject("Rel/Eth", "STA/SCÄ", "E405/E414"),
        new Subject("DS/Ku/Mu", "WEI/ARA/MOS", "E407/E117/E114"),
        new Subject("DS/Ku/Mu", "WEI/ARA/MOS", "E407/E117/E114"),
    ]),
    new Weekday("Mittwoch", [
        new Subject("LK", "LK Lehrer", "LK Raum"),
        new Subject("LK", "LK Lehrer", "LK Raum"),
        new Subject("PoWi", "SCS/STR", "E407/E402"),
        new Subject("PoWi", "SCS/STR", "E407/E402"),
        new Subject("Tutoren", "BÖS", "E205"),
        new Subject("Prin", "BÖS", "E410"),
        new Subject("Prin", "BÖS", "E410"),
        new Subject("Prin", "BÖS", "E410"),
        new Subject("Sport", "SPO/VAL", "RGS/MLS"),
        new Subject("Sport", "SPO/VAL", "RGS/MLS"),
    ]),
    new Weekday("Donnerstag", [
        new Subject("2tedv", "LED", "E305"),
        new Subject("2tedv", "LED", "E305"),
        new Subject("tedv", "LED", "E205"),
        new Subject("tedv", "LED", "E205"),
        new Subject("Deutsch", "STR/HOW/STD", "E404/E407/E416"),
        new Subject("Deutsch", "STR/HOW/STD", "E404/E407/E416"),
        new Subject("Eth/Span", "STA/YAR", "E404/E401"),
        new Subject("Eth/Span", "STA/YAR", "E404/E401"),
    ]),
    new Weekday("Freitag", [
        new Subject("PRIN", "BÖS", "E205"),
        new Subject("PRIN", "BÖS", "E205"),
        new Subject("ekDV", "LED", "E205"),
        new Subject("ekDV", "LED", "E205"),
        new Subject("Englisch", "LIN/BAU/GED", "E418/E405/E416"),
        new Subject("Englisch", "LIN/BAU/GED", "E418/E405/E416"),
        new Subject("Mathe", "ISE/WUL/ROD", "E416/E107/E404"),
        new Subject("Mathe", "ISE/WUL/ROD", "E416/E107/E404"),
    ]),
];

export default function App(){
    return (
        <div className="timetableCenter">
            <TimeTable hours={hours} weekdays={weekdays} fontfamily="Consolas" accent1="#77ccff" accent2="#aa00ff" accent3="#ffffff"/>
        </div>
    )
}