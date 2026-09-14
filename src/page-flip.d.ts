declare module 'page-flip' {
  export class PageFlip {
    constructor(element: HTMLElement, setting: any);
    loadFromHTML(items: NodeListOf<Element> | HTMLElement[]): void;
    turnToPage(pageNum: number): void;
    flipNext(corner?: string): void;
    flipPrev(corner?: string): void;
    destroy(): void;
    on(event: string, app: (e: any) => void): void;
    off(event: string): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
  }
}
