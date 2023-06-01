import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class Unsub implements OnDestroy {

  unsbscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.unsbscribe.next();
    this.unsbscribe.complete();
  }
}
