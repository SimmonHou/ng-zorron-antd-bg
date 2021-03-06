import { OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp } from '../core/types/common-wrap';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date';
import { PanelMode } from './standard-types';
export declare class NzMonthPickerComponent extends AbstractPickerComponent implements OnChanges {
    nzPlaceHolder: string;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzDefaultValue: CandyDate;
    nzFormat: string;
    panelMode: PanelMode;
    extraFooter: TemplateRef<void> | string;
    constructor(i18n: NzI18nService);
    ngOnChanges(changes: SimpleChanges): void;
    onPanelModeChange(mode: PanelMode): void;
    onValueChange(value: CandyDate): void;
    onOpenChange(open: boolean): void;
    private cleanUp();
}
