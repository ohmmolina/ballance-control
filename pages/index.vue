<script setup>
  import {
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    Badge,
  } from "flowbite-vue";
  import { useSidebarStore } from "~~/stores/sidebar";
  const { getOpen: sidebar } = storeToRefs(useSidebarStore());

  definePageMeta({
    title: "Dashboard",
    description: "Accounts summary",
    keywords: "balance, accounts, summary, dashboard",
  });
</script>
<template>
  <main
    class="py-2 px-2 lg:py-4 lg:px-16 bg-gray-200 min-h-[calc(100vh-72px)] gap-2 overflow-hidden"
    :class="{ 'lg:ml-64': sidebar }">
    <div class="contain gap-3 lg:gap-5 w-100">
      <UiCard class="col-span-2 md:col-span-1 px-8 py-5">
        <template #title>
          <div class="flex justify-between">
            <span class="text-xs tracking-widest">Main account</span>
            <span class="text-xs tracking-widest">Total savings</span>
          </div>
        </template>
        <div class="flex justify-between items-center my-2">
          <div>
            <p class="text-xl font-bold">NU Saving Accounts</p>
            <span class="text-sm">1234 5678 9012 3456</span>
            <fai
              class="ml-2 transition-colors text-sm text-gray-400 hover:text-gray-300"
              icon="far fa-clone" />
          </div>
          <div>
            <p class="text-xl font-bold">$ 1,000.00</p>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5">
          <div class="flex gap-3">
            <UiButton class="text-xs" color="blue">View account</UiButton>
            <UiButton class="text-xs" color="blue" variant="flat">
              Transfer money
            </UiButton>
          </div>
          <fai
            class="text-gray-400 text-sm cursor-pointer transition-colors hover:text-gray-300"
            icon="fas fa-arrow-up-right-from-square" />
        </div>
      </UiCard>
      <UiCard class="col-span-2 md:col-span-1 px-6 py-5" color="blue">
        <div class="grid grid-cols-3">
          <span
            class="col-span-2 md:col-span-3 lg:col-span-2 text-sm font-bold tracking-widest">
            Define recurrent charges
          </span>
          <div class="row-span-3 md:row-span-2 lg:row-span-3 flex items-center">
            <fai class="w-full h-full text-4xl" icon="far fa-calendar-days" />
          </div>
          <div class="mt-3 row-start-2 col-span-2">
            <p class="text-xs min-h-full">
              Define and see all the recurrent payment from all your accounts
              and tracking them.
            </p>
          </div>
          <div class="mt-4 md:col-span-2">
            <UiButton class="text-xs" color="green" variant="flat">
              Go to charges
            </UiButton>
          </div>
        </div>
      </UiCard>
    </div>
    <div class="mt-5 overflow-x-scroll lg:overflow-auto">
      <div class="grid grid-cols-4 gap-5 w-[1200px] lg:w-full">
        <UiCard class="px-8">
          <template #title>
            <div class="flex justify-between items-center">
              <div>
                <p class="font-bold text-sm">Santander</p>
                <p class="text-xs font-semibold">
                  45 <span class="text-base font-bold">****</span> 3457
                  <fai
                    class="ml-2 transition-colors text-sm text-gray-400 hover:text-gray-300"
                    icon="far fa-clone" />
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/banco-santander-logo.svg"
                  width="80"
                  alt="Santander" />
              </div>
            </div>
          </template>
          <div class="flex justify-between items-center">
            <span class="mt-3 font-semibold text-lg">$ 1,000.00</span>
            <div
              class="-mr-2 -mb-2 p-2 bg-transparent font-semibold cursor-pointer rounded-xl hover:text-gray-400">
              <fai icon="fas fa-ellipsis-vertical" />
            </div>
          </div>
        </UiCard>
        <UiCard class="px-8">
          <template #title>
            <div class="flex justify-between items-center">
              <div>
                <p class="font-bold text-sm">BBVA</p>
                <p class="text-xs font-semibold">
                  45 <span class="text-base font-bold">****</span> 3457
                  <fai
                    class="ml-2 transition-colors text-sm text-gray-400 hover:text-gray-300"
                    icon="far fa-clone" />
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/bbva-2.svg"
                  width="80"
                  alt="Santander" />
              </div>
            </div>
          </template>
          <div class="flex justify-between items-center">
            <span class="mt-3 font-semibold text-lg">$ 1,000.00</span>
            <div
              class="-mr-2 -mb-2 p-2 bg-transparent font-semibold cursor-pointer rounded-xl hover:text-gray-400">
              <fai icon="fas fa-ellipsis-vertical" />
            </div>
          </div>
        </UiCard>
        <UiCard class="px-8">
          <template #title>
            <div class="flex justify-between items-center">
              <div>
                <p class="font-bold text-sm">American Express</p>
                <p class="text-xs font-semibold">
                  45 <span class="text-base font-bold">****</span> 3457
                  <fai
                    class="ml-2 transition-colors text-sm text-gray-400 hover:text-gray-300"
                    icon="far fa-clone" />
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/american-express-1.svg"
                  width="50"
                  alt="Santander" />
              </div>
            </div>
          </template>
          <div class="flex justify-between items-center">
            <span class="mt-3 font-semibold text-lg">$ 1,000.00</span>
            <div
              class="-mr-2 -mb-2 p-2 bg-transparent font-semibold cursor-pointer rounded-xl hover:text-gray-400">
              <fai icon="fas fa-ellipsis-vertical" />
            </div>
          </div>
        </UiCard>
        <UiCard class="px-8">
          <template #title>
            <div class="flex justify-between items-center">
              <div>
                <p class="font-bold text-sm">NU Bank</p>
                <p class="text-xs font-semibold">
                  45 <span class="text-base font-bold">****</span> 3457
                  <fai
                    class="ml-2 transition-colors text-sm text-gray-400 hover:text-gray-300"
                    icon="far fa-clone" />
                </p>
              </div>
              <div>
                <svg
                  width="45"
                  viewBox="0 0 58 32"
                  fill="rgb(130, 10, 209)"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.4699 3.05246C12.304 1.12557 14.7369 0 17.5951 0C23.1632 0 26.8549 4.06542 27.5612 10.1557C27.7902 12.1335 27.7881 14.9219 27.7858 18.1516C27.7855 18.4828 27.7853 18.8187 27.7853 19.1588V31.2578H20.1281V22.309C20.1281 22.309 20.1125 14.6501 20.0657 13.2187C19.8602 6.98449 16.1695 3.06722 10.4691 3.06301C8.74925 4.88006 7.82773 7.10172 7.69183 10.4987C7.67315 10.9725 7.67785 12.6519 7.68404 14.8653C7.68725 16.0121 7.69086 17.3023 7.69183 18.6424C7.6975 24.4753 7.69183 31.2591 7.69183 31.2591H0.0346685V17.487C0.0346685 17.0151 0.0260685 16.5392 0.0174352 16.0614C6.75514e-05 15.1003 -0.0174352 14.1318 0.0346685 13.1728C0.121182 11.5741 0.397742 10.0025 1.14374 8.54252C2.85132 5.1978 6.35016 3.04426 10.0802 3.04426C10.2105 3.04426 10.3409 3.047 10.4699 3.05246Z"
                    class="sc-pIjat dXLlQQ"></path>
                  <path
                    d="M57.9653 18.8272C58.0174 17.8682 57.9999 16.8996 57.9826 15.9386C57.9739 15.4608 57.9653 14.9849 57.9653 14.513V0.740867H50.3082C50.3082 0.740867 50.3025 7.52467 50.3082 13.3575C50.3091 14.6976 50.3127 15.9877 50.3159 17.1345C50.3221 19.348 50.3268 21.0274 50.3082 21.5012C50.1723 24.8983 49.2507 27.1199 47.5309 28.937C41.8306 28.9327 38.14 25.0154 37.9344 18.7813C37.8876 17.3499 37.8678 13.7978 37.8678 9.68381V0.735023L30.2163 0.742173V12.8412C30.2163 13.1813 30.216 13.5171 30.2158 13.8484C30.2134 17.0781 30.2114 19.8664 30.4404 21.8443C31.1452 27.9346 34.8369 32 40.405 32C43.2633 32 45.6962 30.8744 47.5303 28.9475C47.6592 28.953 47.7895 28.9557 47.9198 28.9557C51.6498 28.9557 55.1487 26.8022 56.8563 23.4575C57.6023 21.9974 57.8788 20.4259 57.9653 18.8272Z"
                    class="sc-pIjat dXLlQQ"></path>
                </svg>
              </div>
            </div>
          </template>
          <div class="flex justify-between items-center">
            <span class="mt-3 font-semibold text-lg">$ 1,000.00</span>
            <div
              class="-mr-2 -mb-2 p-2 bg-transparent font-semibold cursor-pointer rounded-xl hover:text-gray-400">
              <fai icon="fas fa-ellipsis-vertical" />
            </div>
          </div>
        </UiCard>
      </div>
    </div>
    <div class="contain gap-3 md:gap-5 mt-5">
      <UiCard class="col-span-2 lg:col-span-1">
        <template #title>
          <div class="flex justify-between items-center">
            <span class="text-xs tracking-widest">Latest transactions</span>
            <UiButton icon="fas fa-arrow-right" variant="link" rounded-circle />
          </div>
        </template>
        <Accordion class="my-5">
          <accordion-panel>
            <accordion-header>
              <div
                class="grid content-center gap-5 md:flex justify-evenly items-center a">
                <span class="md:w-1/5 text-center font-semibold">Today</span>
                <span class="md:w-1/5 text-center">Starbucks coffee</span>
                <span class="md:w-1/5 text-center">Credit card</span>
                <p class="flex md:w-1/5">
                  <Badge class="w-fit" style="margin: 0 auto"> Food </Badge>
                  <Badge class="w-fit" style="margin: 0 auto" type="green">
                    Coffee
                  </Badge>
                </p>
                <span class="md:w-1/5 text-center font-semibold">
                  - $15.00
                </span>
              </div>
            </accordion-header>
            <accordion-content>
              <div>Details</div>
            </accordion-content>
          </accordion-panel>
          <accordion-panel>
            <accordion-header>
              <div
                class="grid content-center gap-5 md:flex justify-evenly items-center">
                <span class="md:w-1/5 text-center font-semibold">Today</span>
                <span class="md:w-1/5 text-center">Spotify Premium</span>
                <span class="md:w-1/5 text-center">Credit card</span>
                <p class="flex md:w-1/5">
                  <Badge class="w-fit" style="margin: 0 auto" type="red"
                    >Entertaiment</Badge
                  >
                </p>
                <span class="md:w-1/5 text-center font-semibold">
                  - $10.00
                </span>
              </div>
            </accordion-header>
            <accordion-content>
              <div>Details</div>
            </accordion-content>
          </accordion-panel>
        </Accordion>
      </UiCard>
      <UiCard class="col-span-2 lg:col-span-1" title="Analytics" color="blue" />
    </div>
  </main>
</template>
<style scoped>
  .contain {
    display: grid;
    grid-template-columns: 3fr 2fr;
  }
</style>
