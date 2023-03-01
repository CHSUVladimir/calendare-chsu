import React from 'react';
import { ICHSUCalendareLocalisation, SatrtDay } from './loc';
import { IDatesView } from './CalendareEventsView';
import styles from './styles.module.scss';
import { DefaultLocalisation } from './loc/DefaultLocalisation';
import DayNamesRow from './Rows/DayNamesRow';
import WeekRow from './Rows/WeekRow';

export interface ICHSUCalendare {
  Localisation?: ICHSUCalendareLocalisation;
  StartDay?: SatrtDay;
  WithoutLess?: boolean;
  minYear?: number;
  zero?: boolean;
  MonthName?: boolean;
  DatesView?: IDatesView;
  onDateSelect?:(Day:Date)=>any;
  CurentSelected?:Date|Date[];
  DontDisplayHooks?:boolean;
  CurrentYear?:number;
  CurrentMonth?:number;
  startDate?:(day:Date)=>void;
  endDate?:(day:Date)=>void;
  period?:(start:Date, end:Date)=>void;
  await?:boolean;
  awaitElement?:JSX.Element;
}

interface ICalendareState {
  CurentDate: Date;
}

export default class CHSUCalendare extends React.Component<ICHSUCalendare, ICalendareState>{
  
  public state: Readonly<ICalendareState> = {
    CurentDate: this.startDate()
  };

  public render(): React.ReactNode {
    if(!this.props.await){}else{
      return(
        <div className={styles.chsuCalendare}>
          {this.props.awaitElement??<div>Подождите, идет загрузка данных...</div>}
        </div>
      );
    }
    return (
      <div className={styles.chsuCalendare}>
        <div className={styles.header}>
          <span className={styles.left + " " + styles.button}
            onClick={() => {
              this.setState({ CurentDate: this.MonthMinus });
            }}> &lang; </span>
            {!this.props.DontDisplayHooks?<span className={styles.left + " " + styles.hook}></span>:<></>}          
          <span className={styles.monthYear}> {this.StartWD !== "CurentDate" && this.StartWD !== "FirstDayWeek" ? this.Loc.LocalYear[this.state.CurentDate.getMonth()].LongName : ""} {this.state.CurentDate.getFullYear()} </span>
          {!this.props.DontDisplayHooks? <span className={styles.right + " " + styles.hook}></span>:<></>}         
          <span className={styles.right + " " + styles.button}
            onClick={() => {
              this.setState({ CurentDate: this.MonthPlus });
            }}
          > &rang; </span>
        </div>
        <div className={styles.body}>
        <table>
          <thead>
          <DayNamesRow
            Localisation={this.Loc.LocalWeek}
            StartDay={this.StartWD}
            CurentDate={this.StartWD === "CurentDate" ? this.state.CurentDate : undefined}
          />
          </thead>
          <tbody>
            {
              this.WeekDates.map((dt, index) => {
                  return (
                      <WeekRow
                          Localisation={this.Loc.LocalWeek}
                          StartDay={this.StartWD}
                          CurentDate={dt}
                          WithoutLess={this.props.WithoutLess}
                          key={dt.toDateString() + "_" + index}
                          WN={index}
                          YearLoc={this.Loc.LocalYear}
                          zero={this.props.zero}
                          MonthName={this.props.MonthName}
                          DatesView={this.props.DatesView}
                          onDateSelect={this.props.onDateSelect}
                          CurentSelected={this.props.CurentSelected}
                      />
                  );
              })
            }
          </tbody>
        </table>
          
        </div>
        <a href='https://www.chsu.ru/' style={{fontSize:"0.5em", width:"100%", textAlign:'center', display:'block'}}>© ЧГУ</a>
      </div>
    );
  }

  private get Loc(): ICHSUCalendareLocalisation {
    return this.props.Localisation??DefaultLocalisation();   
  }

  private get MonthPlus(): Date {
    const d = this.state.CurentDate;
    const m = d.getMonth() + 1;
    const year = d.getFullYear();
    if (this.props.StartDay && this.props.StartDay !== "FirstDayMonth") {
        if (this.props.StartDay === "FirstDayWeek") {
            return new Date(year, m, d.getDate());
        } else {
            return new Date(year, d.getMonth(), d.getDate() + 35);
        }

    } else {
        return new Date(year, m, 1);
    }
  }

  private get MonthMinus(): Date {
    const d = this.state.CurentDate;
    if (this.props.StartDay && this.props.StartDay !== "FirstDayMonth") {
        if (this.props.StartDay === "FirstDayWeek") {
            if (this.props.minYear) {
                const cds = new Date(d.getFullYear(), d.getMonth() - 1, 1);
                if (cds.getFullYear() >= this.props.minYear) {
                    return cds;
                } else {
                    alert(this.Loc.Warning.NoLessMonth);
                    return d;
                }
            } else {
                return new Date(d.getFullYear(), d.getMonth() - 1, 1);
            }
        } else {
            if (this.props.minYear) {
                const cdd = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 35);
                if (cdd.getFullYear() >= this.props.minYear) {
                    return cdd;
                } else {
                    alert(this.Loc.Warning.NoLessMonth);
                    return new Date(this.props.minYear, 0, 1);
                }
            } else {
                return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 35);
            }
        }
    } else {
        if (this.props.minYear) {
            const cd = new Date(d.getFullYear(), d.getMonth() - 1, 1);
            if (cd.getFullYear() >= this.props.minYear) {
                return cd;
            } else {
                alert(this.Loc.Warning.NoLessMonth);
                return d;
            }
        } else {
            return new Date(d.getFullYear(), d.getMonth() - 1, 1);
        }
    }
  }

  private get StartWD(): SatrtDay {
    return this.props.StartDay ?? "FirstDayMonth";
  }

  private get WeekDates(): Date[] {
    let res: Date[] = [];
    const d = this.state.CurentDate;
    if (this.props.StartDay && this.props.StartDay !== "FirstDayMonth") {
        for (let i = 0; i < this.WeekInMonth; i++) {
            let dt = new Date(d.getFullYear(), d.getMonth(), d.getDate() + i * 7);
            res.push(dt);
        }
    } else {
        let cd = new Date(d.getFullYear(), d.getMonth(), 1);
        for (let i = 0; i < this.WeekInMonth; i++) {
            let dt = new Date(cd.getFullYear(), cd.getMonth(), cd.getDate() + i * 7);
            if (dt.getMonth() === cd.getMonth()) {
                res.push(dt);
            } else {
                dt = new Date(cd.getFullYear(), cd.getMonth() + 1, 0);
                res.push(dt);
            }
        }
    }    
    if(res.length>0){
      const sd = res[0];
      const fdlw = res[res.length-1];
      const rd = new Date(fdlw.getFullYear(), fdlw.getMonth(), fdlw.getDate()+6);
      if(this.props.startDate) this.props.startDate(sd);
      if(this.props.endDate) this.props.endDate(rd);
      if(this.props.period) this.props.period(sd,rd);
    }

    return res;
  }

  private get WeekInMonth(): number {
    const d = this.state.CurentDate;
    let l = new Date(d.getFullYear(), d.getMonth() + 1, 0);
    return Math.ceil((l.getDate() - (l.getDay() ? l.getDay() : 7)) / 7) + 1;
  }

  private startDate():Date{
    if(this.props.CurentSelected){
      const darr = this.props.CurentSelected as Date[];
      if(darr.length){
        if(darr.length>0){
          const dd = darr.map(m=>new Date(m)).sort((a,b)=>a.getTime()-b.getTime())[0];
          return new Date(dd);
        }else{
          return new Date();
        }
      }else{
        const cd = this.props.CurentSelected as Date;        
        return new Date(cd);
      }
    }else{
      if(this.props.CurrentYear){
        if(this.props.CurrentMonth){
          return new Date(this.props.CurrentYear,this.props.CurrentMonth,1);
        }else{
          return new Date(this.props.CurrentYear,0,1);
        }
      }else{
        return new Date();
      }      
    }
  }
}
