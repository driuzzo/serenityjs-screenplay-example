import { PageElement} from "@serenity-js/web";
import { byDataTest } from "../../Utils";

export const checkoutButton = () => 
    PageElement
        .located(byDataTest('checkout'))
        .describedAs('checkout button')
