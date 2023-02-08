import React from 'react';
import { getValuesFromDate, IDatesView } from '../CalendareEventsView';
import { ILocYear } from '../loc';
import CaledareStyle from '../styles.module.scss';

export interface IDayCell {
    CurentDate?: Date;
    YearLoc: ILocYear;
    zero?: boolean;
    MonthName?: boolean;
    DatesView?: IDatesView
    onDateSelect?:(Day:Date)=>any;
    CurentSelected?:Date|Date[];
}

export default class DayCell extends React.Component<IDayCell>{

    public render(): React.ReactElement<IDayCell> {
        return (
            <td className={this.ClassNames} onClick={()=>this.DayClick()} style={this.props.CurentDate?{cursor:'pointer'}:undefined}>
                {this.props.DatesView ? <div>
                    {this.props.CurentDate ?
                        getValuesFromDate(this.props.DatesView, this.props.CurentDate)?.elements.map((e, index) => {
                            return React.cloneElement(e, { key: "" + index + this.props.CurentDate?.toDateString() });
                        })
                        : ""}
                </div> : ""}
                <span>{this.DayNumber}</span>
                {this.props.MonthName ? <br /> : ""}
                {this.props.MonthName ? <label>{this.monthName}<br />{this.props.CurentDate?.getFullYear()}</label> : ""}
            </td>
        );
    }

    /**
     * Число (дата)
     */
    private get DayNumber(): string {
        if (this.props.CurentDate) {
            if (this.props.zero) {
                const dn = this.props.CurentDate.getDate();
                if (dn > 9) {
                    return "" + this.props.CurentDate.getDate();
                } else {
                    return "0" + this.props.CurentDate.getDate();
                }
            } else {
                return "" + this.props.CurentDate.getDate();
            }
        } else {
            return "";
        }
    }

    /**
     * Набор классов css
     */
    private get ClassNames(): string {
        if (!this.props.CurentDate) {
            return CaledareStyle.nil;
        } else {
            let res="";
            const td = new Date();
            const cd = this.props.CurentDate;
            if (td.getFullYear() === cd.getFullYear() && td.getMonth() === cd.getMonth() && td.getDate() === cd.getDate()) {
                res+=CaledareStyle.today;
            }
            if(this.props.CurentSelected){
                const arr = this.props.CurentSelected as Date[];
                if(arr.length){
                    const ff = arr.map(m=>new Date(m)).find(m=>m.getFullYear() === cd.getFullYear() && m.getMonth() === cd.getMonth() && m.getDate() === cd.getDate());
                    if(ff){
                        res+=' ' +CaledareStyle.selected;
                    }

                }else{
                    let dtn = this.props.CurentSelected as Date;
                    dtn = new Date(dtn);
                    if (dtn.getFullYear() === cd.getFullYear() && dtn.getMonth() === cd.getMonth() && dtn.getDate() === cd.getDate()) {
                        res+=' ' +CaledareStyle.selected;
                    }
                }
            }
            return res;
        }
        
    }

    /**
     * Наименование месяца
     */
    private get monthName(): string {
        if (this.props.CurentDate && this.props.MonthName) {
            return this.props.YearLoc[this.props.CurentDate.getMonth()].LongName;
        } else {
            return "";
        }
    }

    private DayClick(){
        if(this.props.onDateSelect && this.props.CurentDate){
            this.props.onDateSelect(this.props.CurentDate);
        }
    }
}