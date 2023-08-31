import { HourItem } from "../../models/HourItem";
import { Subject } from "../../models/Subject";
import { Weekday } from "../../models/Weekday";
import styles from "./TimeTable.module.scss";

export default function TimeTable() {
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

    return (
        <div className={styles.timetable}>
            <div className={styles.livestatustext}>Schulschluss</div>
            <div className={styles.wrapper}>
                <div className={styles.weekday}>
                    <div className={styles.houritem}>Stunden</div>
                    {hours.map((hour, i) => (
                        <div key={i} className={styles.houritem}>
                            {hour.Start} - {hour.End}
                        </div>
                    ))}
                </div>
                {weekdays.map((weekday, i) => (
                    <div key={i} className={styles.weekday}>
                        <div className={styles.subject}>{weekday.name}</div>
                        {Array.from({ length: hours.length }).map((_, j) => (
                            <div key={j} className={styles.subject}>
                                <div
                                    id={`item${i}_${j}`}
                                    style={{ display: j <= weekday.subjects.length ? "block" : "none" }}
                                >
                                    {j < weekday.subjects.length && (
                                        <div>
                                            {weekday.subjects[j].Name}
                                            <div className={styles.subjectroom}>{weekday.subjects[j].Room}</div>
                                            <div className={styles.flex}></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
