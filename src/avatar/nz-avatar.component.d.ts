import { ChangeDetectorRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type NzAvatarShape = 'square' | 'circle';
export declare type NzAvatarSize = 'small' | 'large' | 'default';
export declare class NzAvatarComponent implements OnChanges {
    private cd;
    private updateHostClassService;
    private el;
    private prefixCls;
    private sizeMap;
    hasText: boolean;
    hasSrc: boolean;
    hasIcon: boolean;
    textStyles: {};
    textEl: ElementRef;
    nzShape: NzAvatarShape;
    nzSize: NzAvatarSize;
    nzText: string;
    nzSrc: string;
    nzIcon: string;
    setClass(): this;
    imgError(): void;
    private calcStringSize();
    private notifyCalc();
    constructor(elementRef: ElementRef, cd: ChangeDetectorRef, updateHostClassService: NzUpdateHostClassService);
    ngOnChanges(changes: SimpleChanges): void;
}
