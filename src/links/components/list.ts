import { DatePipe, JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  computed,
  signal,
} from '@angular/core';
import { ApiLinkItem } from '../types';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <div class="">
      @if (linksResource.isLoading()) {
        <div class="alert alert-info">Your data is loading!</div>
      } @else {
        @for (link of linksResource.value(); track link.id) {
          <div class="card w-96 bg-base-100 card-sm shadow-sm">
            <div class="card-body">
              <h2 class="card-title">{{ link.title }}</h2>
              <p>
                {{ link.description }}
              </p>
              <div class="justify-end card-actions">
                <a [href]="link.link" target="_blank" class="btn btn-primary"
                  >Visit</a
                >
                <p>Link {{ link.link }}</p>
                <p>Added on {{ link.added | date }}</p>
              </div>
            </div>
          </div>
        } @empty {
          <p>There are no links! Bummer!</p>
        }
      }
    </div>
  `,
  styles: ``,
})
export class List {
  linksResource = httpResource<ApiLinkItem[]>(() => ({
    url: 'https://api.some-fake-server.com/links',
  }));
  sortOptions = signal<'NewestFirst' | 'OldestFirst'>('NewestFirst');
  sortedList = computed(() => {
    return [];
  });
}
