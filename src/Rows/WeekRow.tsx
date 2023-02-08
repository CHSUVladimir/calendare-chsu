import React from 'react';
import { IDatesView } from '../CalendareEventsView';
import { ILocWeek, ILocYear, SatrtDay } from '../loc';
import DayCell from './DayCell';

export interface IWeekRow {
    Localisation: ILocWeek;
    StartDay: SatrtDay;
    CurentDate: Date;
    YearLoc: ILocYear;
    zero?: boolean;
    MonthName?: boolean;
    WithoutLess?: boolean;
    DatesView?: IDatesView
    WN: number;
    onDateSelect?:(Day:Date)=>any;
    CurentSelected?:Date|Date[];
}

export default class WeekRow extends React.Component<IWeekRow>{

    public render(): React.ReactNode {
        return (
            <tr>
                {
                    this.WeekDates.map(m => {
                        return (
                            <DayCell
                                key={m.order + "_" + (m.cd ? m.cd.getDate().toLocaleString() : "nill") + "_" + this.props.WN}
                                CurentDate={m.cd}
                                YearLoc={this.props.YearLoc}
                                zero={this.props.zero}
                                MonthName={this.props.MonthName}
                                DatesView={this.props.DatesView}
                                onDateSelect={this.props.onDateSelect}
                                CurentSelected={this.props.CurentSelected}
                            />
                        );
                    })
                }
            </tr>
        );
    }
    
    
    private get WeekDates(): { order: number, cd?: Date }[] {
        var res: { order: number, cd?: Date }[] = [];
        const cdt = this.props.CurentDate;
        if (this.props.StartDay !== "CurentDate") {
            const sd = this.props.Localisation.Week[cdt.getDay()].LocDof;
            const dl = sd - this.props.Localisation.FirstLocDay;
            for (let i = 0; i < 7; i++) {
                let dt = new Date(cdt.getFullYear(), cdt.getMonth(), cdt.getDate() - dl + i);
                res.push(this.DayDate(dt, i));
            }
        } else {
            for (let i = 0; i < 7; i++) {
                let dt = new Date(cdt.getFullYear(), cdt.getMonth(), cdt.getDate() - 1 + 1 + i);
                res.push({ order: i, cd: dt });
            }
        }
        return res;
    }



    private DayDate(DT: Date, orderD: number): { order: number, cd?: Date } {
        if (!this.props.WithoutLess) {
            return { order: orderD, cd: DT };
        } else {
            const cdt = this.props.CurentDate;
            if (DT.getMonth() === cdt.getMonth()) {
                return { order: orderD, cd: DT };
            } else {
                return { order: orderD };
            }
        }
    }

   
}