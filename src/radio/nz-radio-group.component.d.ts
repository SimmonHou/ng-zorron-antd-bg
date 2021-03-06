import { AfterContentInit, AfterViewInit, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare type NzRadioGroupSizeType = 'large' | 'default' | 'small';
import { NzRadioButtonComponent } from './nz-radio-button.component';
import { NzRadioComponent } from './nz-radio.component';
export declare class NzRadioGroupComponent implements AfterContentInit, ControlValueAccessor, AfterViewInit {
    private elementRef;
    private _size;
    private _name;
    private _disabled;
    el: HTMLElement;
    value: string;
    onChange: (_: string) => void;
    onTouched: () => void;
    radios: Array<NzRadioComponent | NzRadioButtonComponent>;
    nzSize: NzRadioGroupSizeType;
    nzDisabled: boolean;
    nzName: string;
    updateChildrenName(): void;
    syncCheckedValue(): void;
    readonly isLarge: boolean;
    readonly isSmall: boolean;
    addRadio(radio: NzRadioComponent | NzRadioButtonComponent): void;
    selectRadio(radio: NzRadioComponent | NzRadioButtonComponent): void;
    updateValue(value: string, emit: boolean): void;
    constructor(elementRef: ElementRef);
    ngAfterContentInit(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngAfterViewInit(): void;
}
