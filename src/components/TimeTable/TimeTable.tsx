import { HourItem } from "../../models/HourItem";
import { Subject } from "../../models/Subject";
import { Weekday } from "../../models/Weekday";
import styles from "./TimeTable.module.scss";
import {useState, useEffect} from 'react';
type Props = {
    accent1: string,
    accent2: string,
    accent3: string,
    fontfamily: string,
    hours: HourItem[],
    weekdays: Weekday[],
}

export default function TimeTable(props: Props) {
    const [statusText, setStatusText] = useState("");
    let lastHighlighted = "";

    function isWeekend(day: number): boolean {
        return day > 5;
    }

    function getCurrentHighlightIndex(currentTime: number, currentWeekday: Weekday): number{
        const index = props.hours.findIndex(x => parseInt(x.Start.replace(":", "")) <= currentTime && parseInt(x.End.replace(":", "")) > currentTime);
        if(index >= currentWeekday.subjects.length)
            return -1;
        return index;
    }

    function detectDoubleLessons(currentHighlightIndex: number, currentDay: Weekday): number{
        //Check whether there are hours left
        if(currentHighlightIndex + 1 <  currentDay.subjects.length){
            const nextHour = currentDay.subjects[currentHighlightIndex + 1];
            const currentHour = currentDay.subjects[currentHighlightIndex];
            if(nextHour.Name === currentHour.Name)  {
                return 1 + detectDoubleLessons(currentHighlightIndex + 1, currentDay);
            }
        }
        return 1;
    }
    
    function subractTime(sub1: number, sub2: number): number{
        const startTime = Math.floor(sub1 / 100) * 60 + (sub1 % 100); // Convert 1200 to 12:00
        const endTime = Math.floor(sub2 / 100) * 60 + (sub2 % 100);   // Convert 500 to 5:00

        // Calculate the time difference in minutes
        return startTime - endTime;
    }

    function GetTimeToNextLesson(currentHighlightIndex: number, currentDay: Weekday, currentTime: number): string | null{
        const hoursLeft = detectDoubleLessons(currentHighlightIndex, currentDay);
        console.log(hoursLeft);
        //only the current one left:
        if(hoursLeft == 1) {
            return subractTime(parseInt(props.hours[currentHighlightIndex].End.replace(":", "")), currentTime) + " Minuten"; 
        }

        return subractTime(parseInt(props.hours[currentHighlightIndex + hoursLeft - 1].End.replace(":", "")), currentTime) + " Minuten"; 
    }

    function highlightItem(){
        const date = new Date();
        const dayOfWeek = date.getDay() - 1;
        const currentTime = 1315;//parseInt(date.getHours().toString() + date.getMinutes().toString());
        const currentWeekday = props.weekdays[dayOfWeek];

        if(lastHighlighted.length > 0)
            document.getElementById(lastHighlighted)?.classList.remove(styles.itemhighlighted);

        //Weekend
        if(isWeekend(dayOfWeek)){
            return;
        }

        const currentHighlightIndex = getCurrentHighlightIndex(currentTime, currentWeekday);
        //Break or no more school
        if(currentHighlightIndex === -1) {
            if(currentTime > parseInt(props.hours[currentWeekday.subjects.length].End.replace(":", ""))){
                //no more school
                setStatusText("Schulschluss");
                return;
            }
            //break:
            setStatusText("Pause");
            return;
        }
    
        const subject = currentWeekday.subjects[currentHighlightIndex];
        const timeTillNextHour = GetTimeToNextLesson(currentHighlightIndex, currentWeekday, currentTime);
        
        setStatusText(`${subject.Name} bei ${subject.Teacher} in ${subject.Room} Noch ${timeTillNextHour}`);

        document.getElementById(`item${dayOfWeek}_${currentHighlightIndex}`)?.classList.add(styles.itemhighlighted);
        lastHighlighted = `item${dayOfWeek}_${currentHighlightIndex}`;
    }
    useEffect(() => {
        highlightItem();
    })
    
    return (
        <div className={styles.timetable} style={{fontFamily: props.fontfamily}}>
            <div className={styles.livestatustext}>{statusText}</div>
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
