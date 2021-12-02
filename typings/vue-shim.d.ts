// declare module "*.vue" {
//     import Vue from 'vue'
//     export default Vue
// }

/* eslint-disable */
declare module "*.vue" {

    // import type { DefineComponent } from "vue";
    // const component: DefineComponent<{}, {}, any>;

    import type { defineComponent } from "vue";
    const component: ReturnType<typeof defineComponent>;

    export default component;

}
