export class FaceSnapModel {
    title: string
    description: string
    createDate: Date
    imgUrl: string

    constructor (
        title: string,
        description: string,
        createDate: Date,
        imgUrl: string
    ) {
        this.title = title
        this.description = description
        this.createDate = createDate
        this.imgUrl = imgUrl
    }
}