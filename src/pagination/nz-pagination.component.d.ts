import { EventEmitter, TemplateRef } from '@angular/core';
export declare class NzPaginationComponent {
    private _itemRender;
    private _showSizeChanger;
    private _showQuickJumper;
    private _simple;
    private _hideOnSinglePage;
    private _pageSize;
    private _pageSizeOptions;
    private _total;
    private _pageIndex;
    firstIndex: number;
    pages: any[];
    nzShowTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    nzInTable: boolean;
    nzSize: string;
    nzPageSizeChange: EventEmitter<number>;
    nzPageIndexChange: EventEmitter<number>;
    nzItemRender: TemplateRef<{
        $implicit: 'page' | 'prev' | 'next';
        page: number;
    }>;
    nzShowSizeChanger: boolean;
    nzHideOnSinglePage: boolean;
    nzShowQuickJumper: boolean;
    nzSimple: boolean;
    /** page size changer select values */
    nzPageSizeOptions: number[];
    nzPageIndex: number;
    nzPageSize: number;
    nzTotal: number;
    jumpPage(index: number): void;
    jumpPreFive(): void;
    jumpNextFive(): void;
    jumpPreOne(): void;
    jumpNextOne(): void;
    onPageSizeChange($event: number): void;
    handleKeyDown(e: KeyboardEvent, input: HTMLInputElement, clearInputValue: boolean): void;
    isValid(page: number): boolean;
    handleChange(value: number, target: HTMLInputElement, clearInputValue: boolean): void;
    checkLastIndexOverflow(): boolean;
    readonly lastIndex: number;
    /** generate indexes list */
    buildIndexes(): void;
    readonly isLastIndex: boolean;
    readonly isFirstIndex: boolean;
    constructor();
}
