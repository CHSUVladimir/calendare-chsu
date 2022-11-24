export interface ICalendareEventView {
    /**
     * Набор элементов для отображения
     */
    elements: JSX.Element[];
}

export interface IDatesView {
    /**
     * @param {number} Год
     */
    [Year: number]: {
        /**
         * @param {number} Месяц
         */
        [Month: number]: {
            /**
             * @param {number} День
             */
            [Day: number]: ICalendareEventView | undefined;
        }
    }
}

/**
 * Получает набор эоементов для отображения для конкретной даты
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой производится поиск данных
 * @returns {ICalendareEventView | undefined} отображение
 */
 export function getValuesFromDate(model: IDatesView, curDate: Date): ICalendareEventView | undefined {
    if (model[curDate.getFullYear()]) {
        if (model[curDate.getFullYear()][curDate.getMonth()]) {
            return model[curDate.getFullYear()][curDate.getMonth()][curDate.getDate()];
        } else { return undefined; }
    } else { return undefined; }
}

/**
 * Добавляет набор елементов отображения событий
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой добавляются елементы
 * @param {ICalendareEventView} event набор отображений
 */
export function AddValuesToDate(model: IDatesView, curDate: Date, event: ICalendareEventView) {
    if (getValuesFromDate(model, curDate)) {
        if (event.elements && event.elements.length) {
            const te = event as ICalendareEventView;
            const vd = getValuesFromDate(model, curDate);
            te.elements.forEach(e => {
                vd?.elements.push(e);
            });
        }
    } else {
        if (model[curDate.getFullYear()]) {
            if (model[curDate.getFullYear()][curDate.getMonth()]) {
                model[curDate.getFullYear()][curDate.getMonth()][curDate.getDate()] = event;
            } else {
                model[curDate.getFullYear()][curDate.getMonth()] = { [curDate.getDate()]: event };
            }
        } else {
            model[curDate.getFullYear()] = { [curDate.getMonth()]: { [curDate.getDate()]: event } };
        }
    }
}

/**
 * Добавляет елемент отображения события
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой добавляется елемент
 * @param {JSX.Element} element отображение
 */
export function AddValueToDate(model: IDatesView, curDate: Date, element: JSX.Element) {
    const vd = getValuesFromDate(model, curDate);
    if (vd) {
        if (vd.elements) {
            vd.elements.push(element);
        } else {
            vd.elements = [element];
        }

    } else {
        if (model[curDate.getFullYear()]) {
            if (model[curDate.getFullYear()][curDate.getMonth()]) {
                model[curDate.getFullYear()][curDate.getMonth()][curDate.getDate()] = { elements: [element] };
            } else {
                model[curDate.getFullYear()][curDate.getMonth()] = { [curDate.getDate()]: { elements: [element] } };
            }
        } else {
            model[curDate.getFullYear()] = { [curDate.getMonth()]: { [curDate.getDate()]: { elements: [element] } } };
        }

    }
}