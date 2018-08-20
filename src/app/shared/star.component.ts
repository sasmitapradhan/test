import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'star',
    templateUrl: 'star.component.html',
    styleUrls: [ 'star.component.scss' ]
})

export class StarComponent implements OnInit, OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
// tslint:disable-next-line:eofline
}