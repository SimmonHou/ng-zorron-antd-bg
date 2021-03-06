import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
export declare class NzPopconfirmComponent extends NzToolTipComponent {
    private _locale;
    private _condition;
    _prefix: string;
    _trigger: string;
    _hasBackdrop: boolean;
    nzContent: any;
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzCondition: boolean;
    nzOnCancel: EventEmitter<void>;
    nzOnConfirm: EventEmitter<void>;
    constructor(cdr: ChangeDetectorRef, _locale: NzI18nService);
    show(): void;
    onCancel(): void;
    onConfirm(): void;
}
