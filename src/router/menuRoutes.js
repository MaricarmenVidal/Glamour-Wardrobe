import CheckoutFormik from "../components/pages/CheckoutFormik/CheckoutFormik";
import Cart from "../components/pages/cart/Cart";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";

export const routes=[
    {
        id: "home",
        path: "/",
        Element: ItemListContainer ,
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer ,
    },
    {
        id: "category",
        path: "/category/:categoryId",
        Element: ItemListContainer ,
    },
    {
        id: "cart",
        path: "/cart",
        Element: Cart ,
    },
    {
        id: "checkoutFormik",
        path: "/checkout",
        Element: CheckoutFormik ,
    }
]