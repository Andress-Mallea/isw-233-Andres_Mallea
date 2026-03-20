export class BlogService {
    constructor(articles) {
        this.articles = articles;
    }
    filter(strategy) {
        return this.articles.filter(strategy);
    }
    static byCategory(category) {
        return (article) => category === 'all' || article.category === category;
    }

    static bySearchTerm(term) {
        const lowerTerm = term.toLowerCase();
        return (article) => article.title.toLowerCase().includes(lowerTerm) || 
                            article.desc.toLowerCase().includes(lowerTerm);
    }
}