export class Package {
    private id: number;
    private title: string;
    private content: string;

    constructor(id: number, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}
