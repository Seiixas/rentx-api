interface IDateProvider {
  compareInHours(startedDate: Date, endedDate: Date): number;
  convertedToUTC(date: Date): string;
  dateNow(): Date;
}

export { IDateProvider };
