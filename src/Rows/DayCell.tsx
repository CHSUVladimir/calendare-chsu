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
}

export default class DayCell extends React.Component<IDayCell>{

    public render(): React.ReactElement<IDayCell> {
        return (
            <td className={this.ClassNames}>
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
            const td = new Date();
            const cd = this.props.CurentDate;
            if (td.getFullYear() === cd.getFullYear() && td.getMonth() === cd.getMonth() && td.getDate() === cd.getDate()) {
                return CaledareStyle.today;
            }
        }
        return "";
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
}