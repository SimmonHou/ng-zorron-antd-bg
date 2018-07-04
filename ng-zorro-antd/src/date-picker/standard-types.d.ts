import { TemplateRef } from '@angular/core';
import { CandyDate } from './lib/candy-date';
export interface PickerResultSingle {
    date: CandyDate;
    dateString: string;
}
export interface PickerResultRange {
    date: CandyDate[];
    dateString: string[];
}
export declare type PickerResult = PickerResultSingle | PickerResultRange;
export declare type DisabledDateFn = (d: Date) => boolean;
export declare type DisabledTimePartial = 'start' | 'end';
export interface DisabledTimeConfig {
    nzDisabledHours(): number[];
    nzDisabledMinutes(hour: number): number[];
    nzDisabledSeconds(hour: number, minute: number): number[];
}
export declare type DisabledTimeFn = (current: Date | Date[], partial?: DisabledTimePartial) => DisabledTimeConfig;
export interface SupportTimeOptions {
    nzFormat?: string;
    nzHourStep?: number;
    nzMinuteStep?: number;
    nzSecondStep?: number;
    nzDisabledHours?(): number[];
    nzDisabledMinutes?(hour: number): number[];
    nzDisabledSeconds?(hour: number, minute: number): number[];
    nzHideDisabledOptions?: boolean;
    nzDefaultOpenValue?: Date;
    nzAddOn?: TemplateRef<void>;
}
export interface PresetRanges {
    [key: string]: Date[];
}
export declare type PanelMode = 'decade' | 'year' | 'month' | 'date' | 'time';
