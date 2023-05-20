import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService } from './article.service';
import { FilterArticlesPipe } from './filter-articles.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    TagsComponent,
    ArticlesComponent,
    FilterArticlesPipe,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  articleService = inject(ArticleService);

  title = 'conduit';
  subtitle = 'A place to share your <u>knowledge.</u>';

  keyword = '';

  list = this.articleService.searchArticles('');

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((data) => {
      this.list = data;
    });
  }

  searchArticles(keyword: string) {
    this.keyword = keyword;
  }
}
