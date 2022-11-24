import { ICHSUCalendareLocalisation, ILocYear as LocalisedYear, ILocWeek, IWarning } from ".";

export function DefaultLocalisation(): ICHSUCalendareLocalisation {
    const res: ICHSUCalendareLocalisation = {
        LocalWeek: RUWeek(),
        LocalYear: RuYear(),
        Warning: RuWarnings()
    };

    return res;
};

function RUWeek(): ILocWeek {
    return {
        FirstLocDay: 1,
        Week: {
            1: { LocDof: 1, ShortName: "пн", LongName: "понедельник" },
            2: { LocDof: 2, ShortName: "вт", LongName: "вторник" },
            3: { LocDof: 3, ShortName: "ср", LongName: "среда" },
            4: { LocDof: 4, ShortName: "чт", LongName: "четверг" },
            5: { LocDof: 5, ShortName: "пт", LongName: "пятница" },
            6: { LocDof: 6, ShortName: "сб", LongName: "суббота" },
            0: { LocDof: 7, ShortName: "вс", LongName: "воскресенье" }
        }

    };
}

function RuYear(): LocalisedYear {
    return {
        0: { LocMonthOrder: 1, ShortName: "янв.", LongName: "январь" },
        1: { LocMonthOrder: 2, ShortName: "фев.", LongName: "февраль" },
        2: { LocMonthOrder: 3, ShortName: "мар.", LongName: "март" },
        3: { LocMonthOrder: 4, ShortName: "апр.", LongName: "апрель" },
        4: { LocMonthOrder: 5, ShortName: "май", LongName: "май" },
        5: { LocMonthOrder: 6, ShortName: "июн.", LongName: "июнь" },
        6: { LocMonthOrder: 7, ShortName: "июл.", LongName: "июль" },
        7: { LocMonthOrder: 8, ShortName: "авг.", LongName: "август" },
        8: { LocMonthOrder: 9, ShortName: "сен.", LongName: "сентябрь" },
        9: { LocMonthOrder: 10, ShortName: "окт.", LongName: "октябрь" },
        10: { LocMonthOrder: 11, ShortName: "ноя.", LongName: "ноябрь" },
        11: { LocMonthOrder: 12, ShortName: "дек.", LongName: "декабрь" },
    };
}

function RuWarnings(): IWarning {
    return {
        NoLessMonth: "Значение не может быть меньше чем 2022 год!"
    };
}