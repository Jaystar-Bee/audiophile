import { mount } from "@vue/test-utils";
import AllProducts from '@/components/common/AllProducts.vue'
import products from "@/store/products";

//
describe("Checking all Products", () => {
    //Checking all products existence
    it("Check if Products exists", () => {
        const wrapper = mount(AllProducts, {
            props: 'products'
        })
        expect(wrapper.props()).toBe("products")

    })
})