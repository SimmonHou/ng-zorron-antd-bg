import { CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { CandyDate } from './lib/candy-date';
export declare class NzPickerComponent implements OnInit, AfterViewInit {
    private i18n;
    private changeDetector;
    isRange: boolean;
    open: boolean;
    disabled: boolean;
    placeholder: string | string[];
    allowClear: boolean;
    autoFocus: boolean;
    className: string;
    format: string;
    size: 'large' | 'small';
    style: object;
    value: CandyDate | CandyDate[];
    valueChange: EventEmitter<CandyDate | CandyDate[]>;
    openChange: EventEmitter<boolean>;
    origin: CdkOverlayOrigin;
    pickerInput: ElementRef;
    prefixCls: string;
    animationOpenState: boolean;
    overlayOpen: boolean;
    overlayOffsetY: number;
    overlayOffsetX: number;
    overlayPositions: ConnectionPositionPair[];
    dropdownAnimation: 'top' | 'bottom';
    currentPositionX: 'start' | 'end';
    currentPositionY: 'top' | 'bottom';
    readonly realOpenState: boolean;
    constructor(i18n: NzI18nService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    showOverlay(): void;
    hideOverlay(): void;
    onClickInputBox(): void;
    onClickBackdrop(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickClear(event: MouseEvent): void;
    getReadableValue(partType?: RangePartType): string;
    getPartTypeIndex(partType: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    isEmptyValue(value: CandyDate[]): boolean;
    isOpenHandledByUser(): boolean;
    animationStart(): void;
    animationDone(): void;
}
export declare type RangePartType = 'left' | 'right';
