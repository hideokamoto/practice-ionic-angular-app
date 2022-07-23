import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { createSelector, Store } from '@ngrx/store';
import { Sight, SightsService } from '../sights.service';
import { selectSightsFeature } from '../store';

@Component({
  selector: 'app-sight-detail',
  templateUrl: './sight-detail.page.html',
  styleUrls: ['./sight-detail.page.scss'],
})
export class SightDetailPage implements OnInit {
  public sight: Sight | null;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly service: SightsService,
    private readonly title: Title
  ) { }
  public ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadSouvenir(id)
      .subscribe(result => {
        if (result) {
          this.sight = result;
        } else {
          this.service.fetchSights()
            .subscribe(() => {
              this.loadSouvenir(id).subscribe(item => this.sight = item);
            });
        }
        this.title.setTitle(this.sight.name);
      });
  }


  public getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? '戻る' : '';
  }

  private loadSouvenir(id: string) {
    return this.store.select(createSelector(selectSightsFeature, state => state.sights.find(item => item.id === id)));
  }

}
