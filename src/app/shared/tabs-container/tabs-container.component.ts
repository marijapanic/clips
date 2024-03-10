import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.isActive);

    if (!activeTabs || !activeTabs.length) this.tabs.first.isActive = true;
  }

  selectTab(tab: TabComponent)
  {
    this.tabs.forEach(tab =>
      {
        tab.isActive = false;
      });
      
    tab.isActive  = true;

    return false;
  }
}
