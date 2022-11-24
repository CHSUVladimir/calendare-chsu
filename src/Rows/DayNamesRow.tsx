import React from 'react';
import { ILocWeek, SatrtDay } from '../loc';

export interface IDayNamesRow {
    /**
     * локализированные данные для дней недели
     */
    Localisation: ILocWeek;
    /**
     * Начало недели 
     */
    StartDay: SatrtDay;
    /**
     * Дата для представления с текущего дня
     */
    CurentDate?: Date;
}

export default class DayNamesRow extends React.Component<IDayNamesRow>{

    public render(): React.ReactNode {
        return (
            <tr>
                {this.DaysOrdering.map(on => {
                    return (
                        <th key={"OrderDayName_" + on}>
                            {
                                this.props.Localisation.Week[on].ShortName
                            }
                        </th>
                    );
                })}
            </tr>
        );
    }

    /**
    * @property порядок дней в нелокализированном представлении
    */
    private get DaysOrdering(): number[] {
        let res: number[] = [];
        if (this.props.StartDay !== "CurentDate") {
            const ldof = this.props.Localisation.FirstLocDay;
            let cdof = Object.keys(this.props.Localisation.Week).find(key => this.props.Localisation.Week[key as any as number].LocDof === ldof) as any as number;
            cdof = cdof ? cdof - 1 + 1 : 0;
            for (let i = 0; i < 7; i++) {
                if (cdof + i < 7) {
                    res.push(cdof + i);
                } else {
                    res.push(cdof - 7 + i);
                }
            }
        } else {
            if (this.props.CurentDate) {
                let cdof = this.props.CurentDate.getDay();
                for (let i = 0; i < 7; i++) {
                    if (cdof + i < 7) {
                        res.push(cdof + i);
                    } else {
                        res.push(cdof - 7 + i);
                    }
                }
            } else {
                console.error("Current date is undefinded!");
            }
        }
        return res;
    }
}
