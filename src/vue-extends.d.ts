import Vue from "vue";

declare module "vue-router" {
  type Next<T extends Vue = Vue> = (to?: (vm: T) => any) => void;
}
