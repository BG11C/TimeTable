import { HourItem } from "../../models/HourItem";
import { Weekday } from "../../models/Weekday";
import styles from "./TimeTable.module.scss";

type Props = {
    accent1: string,
    accent2: string,
    accent3: string,
    fontfamily: string,
    hours: HourItem[],
    weekdays: Weekday[],
}

export default function TimeTable(props: Props) {
    let lastHighlighted = "";

    function isWeekend(day: number): boolean {
        return day > 5;
    }

    function getCurrentHighlightIndex(date: Date): number{
        const currentTime = parseInt(date.getHours().toString() + date.getMinutes().toString());
        return props.hours.findIndex(x => parseInt(x.Start.replace(":", "")) <= currentTime &&  parseInt(x.End.replace(":", "")) > currentTime);
    }

    function highlightItem(){
        const date = new Date();
        const dayOfWeek = date.getDay();

        if(lastHighlighted.length > 0)
            document.getElementById(lastHighlighted)?.classList.remove(styles.itemhighlighted);

        if(isWeekend(dayOfWeek)){
            console.log("Wochenende");
            return;
        }

        const item = getCurrentHighlightIndex(date);

        if(item === -1)
            return;
    
        document.getElementById(`item${dayOfWeek - 1}_${item}`)?.classList.add(styles.itemhighlighted);
        lastHighlighted = `item${dayOfWeek - 1}_${item}`;
    }

    highlightItem();
    
    return (
        <div className={styles.timetable} style={{fontFamily: props.fontfamily}}>
            <div className={styles.livestatustext}>Schulschluss</div>
            <div className={styles.wrapper}>
                <div className={styles.weekday}>
                    <div className={styles.houritem} style={{color: props.accent2}}>Stunden</div>
                    {props.hours.map((hour, i) => (
                        <div key={i} className={styles.houritem} style={{color: props.accent1}}>
                            {hour.Start} - {hour.End}
                        </div>
                    ))}
                </div>
                {props.weekdays.map((weekday, i) => (
                    <div key={i} className={styles.weekday}>
                        <div className={styles.subject} style={{color: props.accent2}}>{weekday.name}</div>
                        {props.hours.map((_, j) => (
                            <div key={j} id={`item${i}_${j}`} style={{color: props.accent3}} className={styles.subject}>
                                <div
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
