import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticles',
  standalone: true,
})
export class FilterArticlesPipe implements PipeTransform {
  transform(articles: any[], keyword: string): any[] {
    if (!keyword) {
      return articles;
    }
    return articles.filter((item) => item.title.includes(keyword));
  }
}
