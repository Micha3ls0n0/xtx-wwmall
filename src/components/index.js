import  ImageView from "./imageView/index.vue"
import  Sku from "./sku/index.vue"

export const componentPlugin = {
    install(app){
        app.component("ImageView", ImageView)
        app.component("Sku", Sku)
    }
}