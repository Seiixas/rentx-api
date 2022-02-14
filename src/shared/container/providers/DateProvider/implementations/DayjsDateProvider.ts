import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(startedDate: Date, endedDate: Date): number {
    const endedDateUTC = this.convertedToUTC(endedDate);
    const startedDateUTC = this.convertedToUTC(startedDate);
    return dayjs(endedDateUTC).diff(startedDateUTC, 'hours');
  }

  convertedToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  dateNow(): Date {
    return dayjs().toDate();
  }
}

export { DayjsDateProvider };
