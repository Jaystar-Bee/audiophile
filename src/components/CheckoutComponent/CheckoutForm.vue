<template>
  <form
    class="flex flex-col md:flex-row gap-10"
    @submit.prevent="submitHandler"
  >
    <!---form input fields-->
    <div
      class="
        min-w-[60%]
        w-full
        bg-white
        rounded-lg
        p-4
        py-10
        sm:p-10
        mt-16
        gap-10
      "
    >
      <h1 class="uppercase tracking-widest text-2xl font-semibold mb-10">
        checkout
      </h1>
      <!--Billing Details--->
      <div>
        <h3 class="uppercase text-deep-brown mb-6 font-semibold">
          Billing Details
        </h3>
        <!----Frist step--->
        <div class="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
          <!---Name-->
          <div class="flex-1">
            <div class="flex justify-between">
              <label for="name" class="font-semibold">Name</label>
              <p
                class="text-xs font-bold text-red-600"
                v-if="form.fullName.hasError"
              >
                {{ form.fullName.hasError }}
              </p>
            </div>
            <input
              type="text"
              id="name"
              class="
                caret-deep-brown
                w-full
                p-4
                placeholder:text-gray-500
                outline-none
                border-2 border-gray-200
                focus:border-deep-brown
                rounded-md
                mt-4
                font-semibold
                focus:text-deep-brown
                duration-300
              "
              :class="form.fullName.hasError ? 'border-red-600' : ''"
              v-model="form.fullName.val"
              @blur="checkName"
              placeholder="John Ayilara"
            />
          </div>
          <!---Email--->
          <div class="flex-1">
            <div class="flex justify-between">
              <label for="email" class="font-semibold">Email</label>
              <p
                class="text-xs font-bold text-red-600"
                v-if="form.email.hasError"
              >
                {{ form.email.hasError }}
              </p>
            </div>

            <input
              type="email"
              id="email"
              class="
                caret-deep-brown
                w-full
                p-4
                placeholder:text-gray-500
                outline-none
                border-2 border-gray-200
                focus:border-deep-brown
                rounded-md
                mt-4
                font-semibold
                focus:text-deep-brown
                duration-300
              "
              :class="form.email.hasError ? 'border-red-600' : ''"
              v-model="form.email.val"
              @blur="checkEmail"
              placeholder="john@example.com"
            />
          </div>
          <!---Email ends--->
        </div>
        <!---First step ends--->
        <!---Second step --->
        <!---Phone number-->
        <div class="mt-6 sm:mr-4">
          <div class="w-full sm:w-1/2">
            <div class="flex justify-between">
              <label for="number" class="font-semibold block"
                >Phone Number</label
              >
              <p
                class="text-xs font-bold text-red-600"
                v-if="form.userNumber.hasError"
              >
                {{ form.userNumber.hasError }}
              </p>
            </div>

            <input
              type="num"
              id="number"
              class="
                caret-deep-brown
                w-full
                p-4
                placeholder:text-gray-500
                outline-none
                border-2 border-gray-200
                focus:border-deep-brown
                rounded-md
                mt-4
                font-semibold
                focus:text-deep-brown
                duration-300
              "
              :class="form.userNumber.hasError ? 'border-red-600' : ''"
              v-model="form.userNumber.val"
              @blur="checkUserNumber"
              placeholder="234 903 531 3391"
            />
          </div>
        </div>
      </div>
      <!---Billing details end --->
      <!--Shipping Info starts--->
      <div class="mt-14">
        <h3 class="uppercase text-deep-brown mb-6 font-semibold">
          Shipping info
        </h3>
        <!---Adress--->
        <div class="">
          <div class="w-full sm:w-1/2">
            <div class="flex justify-between">
              <label for="zip_code" class="font-semibold">Address</label>
              <p
                class="text-xs font-bold text-red-600"
                v-if="form.address.hasError"
              >
                {{ form.address.hasError }}
              </p>
            </div>

            <input
              type="text"
              id="zip_code"
              class="
                caret-deep-brown
                w-full
                p-4
                placeholder:text-gray-500
                outline-none
                border-2 border-gray-200
                focus:border-deep-brown
                rounded-md
                mt-4
                font-semibold
                focus:text-deep-brown
                duration-300
              "
              :class="form.address.hasError ? 'border-red-600' : ''"
              @blur="checkAddress"
              v-model="form.address.val"
              placeholder="117 Ave Rocktown"
            />
          </div>
          <!----Frist step--->
          <div
            class="
              flex flex-col
              sm:flex-row sm:items-center
              space-y-4 sm:space-y-0 sm:space-x-4
              flex-wrap
              mt-6
            "
          >
            <!---Zip code-->
            <div class="flex-1">
              <div class="flex justify-between">
                <label for="zip_code" class="font-semibold">Zip Code</label>
                <p
                  class="text-xs font-bold text-red-600"
                  v-if="form.zipcode.hasError"
                >
                  {{ form.zipcode.hasError }}
                </p>
              </div>
              <input
                type="text"
                id="zip_code"
                class="
                  caret-deep-brown
                  w-full
                  p-4
                  placeholder:text-gray-500
                  outline-none
                  border-2 border-gray-200
                  focus:border-deep-brown
                  rounded-md
                  mt-4
                  font-semibold
                  focus:text-deep-brown
                  duration-300
                "
                :class="form.zipcode.hasError ? 'border-red-600' : ''"
                @blur="checkZipCode"
                v-model="form.zipcode.val"
                placeholder="Zipcode"
              />
            </div>
            <!---City--->
            <div class="flex-1">
              <div class="flex justify-between">
                <label for="city" class="font-semibold">City</label>
                <p
                  class="text-xs font-bold text-red-600"
                  v-if="form.city.hasError"
                >
                  {{ form.city.hasError }}
                </p>
              </div>

              <input
                type="text"
                id="city"
                class="
                  caret-deep-brown
                  w-full
                  p-4
                  placeholder:text-gray-500
                  outline-none
                  border-2 border-gray-200
                  focus:border-deep-brown
                  rounded-md
                  mt-4
                  font-semibold
                  focus:text-deep-brown
                  duration-300
                "
                :class="form.city.hasError ? 'border-red-600' : ''"
                @blur="checkCity"
                v-model="form.city.val"
                placeholder="New York"
              />
            </div>
          </div>
          <!---Second step --->
          <!---Country-->
          <div class="mt-6 sm:mr-4">
            <div class="w-full sm:w-1/2">
              <div class="flex justify-between">
                <label for="country" class="font-semibold block">Country</label>
                <p
                  class="text-xs font-bold text-red-600"
                  v-if="form.country.hasError"
                >
                  {{ form.country.hasError }}
                </p>
              </div>

              <input
                type="text"
                id="country"
                class="
                  caret-deep-brown
                  w-full
                  p-4
                  placeholder:text-gray-500
                  outline-none
                  border-2 border-gray-200
                  focus:border-deep-brown
                  rounded-md
                  mt-4
                  font-semibold
                  focus:text-deep-brown
                  duration-300
                "
                :class="form.country.hasError ? 'border-red-600' : ''"
                @blur="checkCountry"
                v-model="form.country.val"
                placeholder="United States"
              />
            </div>
          </div>
        </div>
        <!--Payment Details starts--->
        <div class="mt-14">
          <h3 class="uppercase text-deep-brown mb-6 font-semibold">
            Payment Details
          </h3>
          <!---Payment Method--->
          <div class="mt-6 flex flex-col sm:flex-row sm:justify-between gap-4">
            <p for="zip_code" class="font-semibold flex-1">Payment Method</p>

            <div class="flex-1 w-full">
              <label
                for="emoney"
                class="
                  w-full
                  block
                  p-4
                  outline-none
                  border-2 border-gray-200
                  rounded-md
                  mt-4
                  active:border-deep-brown
                  hover:border-deep-brown
                  font-semibold
                  duration-300
                "
              >
                <input
                  name="method"
                  value="emoney"
                  v-model="form.type"
                  type="radio"
                  id="emoney"
                  class="checked:bg-deep-brown mr-2 radio bg-deep-brown"
                />
                e-Money
              </label>
              <label
                for="cash"
                class="
                  w-full
                  block
                  mt-6
                  p-4
                  outline-none
                  border-2 border-gray-200
                  rounded-md
                  active:border-deep-brown
                  hover:border-deep-brown
                  font-semibold
                  duration-300
                "
              >
                <input
                  name="method"
                  type="radio"
                  value="cash"
                  v-model="form.type"
                  id="cash"
                  class="checked:bg-deep-brown mr-2 radio bg-deep-brown"
                />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        <!---E money Details--->
        <keep-alive>
          <component
            :is="method"
            v-model:eNumber="form.eNumber.val"
            v-model:ePin="form.ePin.val"
            :ePinHasError="form.ePin.hasError"
            :eNumberHasError="form.eNumber.hasError"
            @checkePin="checkePin"
            @checkeNumber="checkeNumber"
          ></component>
        </keep-alive>
      </div>
    </div>
    <!---What to odrer details-->
    <div
      class="
        min-w-[37%]
        w-full
        bg-white
        rounded-lg
        p-10
        mt-8
        sm:mt-16
        self-start
      "
    >
      <h1 class="my-6 uppercase font-semibold tracking-wide text-lg">
        Summary
      </h1>
      <div class="my-6">
        <div>
          <!---Single Product--->
          <checkout-product
            v-for="product in cart"
            :key="product.id"
            :product="product"
          ></checkout-product>
        </div>
        <!----Budget Calculation--->
        <budget-amount
          :cartTotal="cartTotal"
          :shippingCost="shippingCost"
          :vatCost="vatCost"
        ></budget-amount>
        <!----Budget Calculation ends--->
        <base-button :brown="true" class="w-full" type="submit"
          >Continue & pay</base-button
        >
      </div>
    </div>
  </form>
  <!-- <teleport to=""> </teleport> -->
</template>

<script>
import CheckoutProduct from "./CheckoutProduct.vue";
import BudgetAmount from "./BudgetAmount.vue";
import CashOnDelivery from "./CashOnDelivery.vue";
import EmoneyForm from "./EmoneyForm.vue";
export default {
  emits: ["orderSuccess"],
  components: {
    CheckoutProduct,
    CashOnDelivery,
    EmoneyForm,
    BudgetAmount,
  },
  data() {
    return {
      method: "",
      formError: null,
      form: {
        type: null,
        eNumber: {
          val: "",
          hasError: null,
        },
        ePin: {
          val: "",
          hasError: null,
        },
        userNumber: {
          val: "",
          hasError: null,
        },
        fullName: {
          val: "",
          hasError: null,
        },
        email: {
          val: "",
          hasError: null,
        },
        address: {
          val: "",
          hasError: null,
        },
        zipcode: {
          val: "",
          hasError: null,
        },
        city: {
          val: "",
          hasError: null,
        },
        country: {
          val: "",
          hasError: "",
        },
      },
    };
  },
  beforeUpdate() {
    if (this.form.type === "emoney") {
      this.method = "EmoneyForm";
    }
    if (this.form.type === "cash") {
      this.method = "CashOnDelivery";
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartTotal() {
      return this.$store.getters.total;
    },
    shippingCost() {
      return this.$store.getters.shippingCost;
    },
    vatCost() {
      return this.$store.getters.vatCost;
    },
  },
  methods: {
    submitHandler() {
      this.checkData();
      const form = this.form;
      if (
        form.eNumber.hasError ||
        form.ePin.hasError ||
        form.userNumber.hasError ||
        form.fullName.hasError ||
        form.email.hasError ||
        form.address.hasError ||
        form.zipcode.hasError ||
        form.city.hasError ||
        form.country.hasError
      ) {
        return;
      }
      console.log(this.form);
      this.$emit("orderSuccess");

      form.eNumber.val = "";
      form.ePin.val = "";
      form.userNumber.val = "";
      form.fullName.val = "";
      form.email.val = "";
      form.address.val = "";
      form.zipcode.val = "";
      form.city.val = "";
      form.country.val = "";
    },
    checkEmail() {
      if (
        !this.form.email.val
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) ||
        this.form.email.val.length == 0
      ) {
        this.form.email.hasError = "wrong email format";
      } else {
        this.form.email.hasError = null;
      }
    },
    checkUserNumber() {
      if (
        /[A-Z]/.test(this.form.userNumber.val) ||
        /[a-z]/.test(this.form.userNumber.val)
      ) {
        this.form.userNumber.hasError = "Cannot have alphabet";
      } else {
        this.form.userNumber.hasError = null;
      }
      if (this.form.userNumber.val.length == 0) {
        this.form.userNumber.hasError = "This field cannot be empty";
      } else {
        this.form.userNumber.hasError = null;
      }
    },
    checkName() {
      const specialChars = /[`!@#$%^&*()_+\-=[\]{};':|,.<>/?~]/;
      if (
        specialChars.test(this.form.fullName.val) ||
        this.form.fullName.val.length == 0 ||
        /[0-9]/.test(this.form.fullName.val)
      ) {
        this.form.fullName.hasError = "wrong format";
      } else {
        this.form.fullName.hasError = null;
      }
    },
    checkeNumber() {
      if (
        /[A-Z]/.test(this.form.eNumber.val) ||
        /[a-z]/.test(this.form.eNumber.val)
      ) {
        this.form.eNumber.hasError = "it shouldn't contain alphabet";
      } else {
        this.form.eNumber.hasError = null;
      }
      if (this.form.type == "emoney" && this.form.eNumber.val.length == 0) {
        this.form.eNumber.hasError = "This field cannot be empty";
      } else {
        this.form.eNumber.hasError = null;
      }
    },
    checkePin() {
      if (
        /[A-Z]/.test(this.form.ePin.val) &&
        /[a-z]/.test(this.form.ePin.val)
      ) {
        this.form.ePin.hasError = "it shouldn't contain alphabet";
      } else {
        this.form.ePin.hasError = null;
      }
      if (this.form.type == "emoney" && this.form.ePin.val.length == 0) {
        this.form.ePin.hasError = "This field cannot be empty";
      } else {
        this.form.ePin.hasError = null;
      }
    },
    checkCity() {
      if (this.form.city.val.length === 0) {
        this.form.city.hasError = "This field cannot be empty";
      } else {
        this.form.city.hasError = null;
      }
    },
    checkZipCode() {
      if (this.form.zipcode.val.length === 0) {
        this.form.zipcode.hasError = "This field cannot be empty";
      } else {
        this.form.zipcode.hasError = null;
      }
    },
    checkCountry() {
      if (this.form.country.val.length === 0) {
        this.form.country.hasError = "This field cannot be empty";
      } else {
        this.form.country.hasError = null;
      }
    },
    checkAddress() {
      if (this.form.address.val.length === 0) {
        this.form.address.hasError = "This field cannot be empty";
      } else {
        this.form.address.hasError = null;
      }
    },
    checkData() {
      this.checkEmail();
      this.checkUserNumber();
      this.checkName();
      this.checkeNumber();
      this.checkePin();
      this.checkCity();
      this.checkZipCode();
      this.checkCountry();
      this.checkAddress();
    },
  },
};
</script>

<style scoped>
label:has(> .radio:checked) {
  border: 2px #d87d4a solid;
  color: #d87d4a;
}
.radio:checked {
  accent-color: #d87d4a;
}
</style>