export const foundationCode:Object = {
  installCode:`
# NPM
npm install xuyan-ui

# Yarn
yarn add xuyan-ui

# pnpm
pnpm install xuyan-ui
`,
  importCode:`
import xy from "xuyan-ui"
import"xuyan-ui/assets/iconFont/iconfont.css"


app.use(xy);
`
}
type croppingCode = {
  basicUsage:string,
  fixedCroppingSize:string,
  uploadBase64:string

}
const croppingScript:string = `<script setup lang="ts">
import{ref} from "vue";

const visible = ref(false)

const confirmReturn = async(file:File|string)=>{
  console.log(file);
  //网络请求
}
</script>`
export const croppingCode:croppingCode = {
  basicUsage:`<template>
  <xy-img-cropping
    v-model:visible="visible"
    @confirmReturn="confirmReturn"
  >
  </xy-img-cropping>
</template>
${croppingScript}
`,
  fixedCroppingSize:`<template>
  <xy-img-cropping
    v-model:visible="visible"
    @confirmReturn="confirmReturn"
    :previewSizeFixed="true"
  >
  </xy-img-cropping>
</template>
${croppingScript}
`,
  uploadBase64:`<template>
  <xy-img-cropping
    v-model:visible="visible"
    @confirmReturn="confirmReturn"
    :uploadParamIsFile="false"
  >
  </xy-img-cropping>
</template>
${croppingScript}
`
}