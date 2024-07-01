<template>
  <div style="display: flex">
    <div>
      <xy-menu-left
        :menuItems="menuItems"
        :isTheHeightSet="false"
        :showOnlyOneSubmenu="false"
      >
        <template #logo>
          <p style="padding: 10px 0">不隐藏已打开的子菜单项</p>
        </template>
      </xy-menu-left>
    </div>

    <div style="margin-left: 50px">
      <xy-menu-left
        :menuItems="menuItems"
        :isTheHeightSet="false"
      >
        <template #logo>
          <p style="padding: 10px 0">隐藏已打开的子菜单项</p>
        </template>
      </xy-menu-left>
    </div>

  </div>

</template>

<script setup lang="ts">
const menuItems = [
  {
    title:'地球',
    id:'1f02f411cf025aad163e96e6abbfa402',
    path:""
  },
  {
    title:"河北省",
    children:[
      {
        title:"石家庄市",
        id:"7fdcacc36de34c4bca82db93fb9415bd",
        path:"",
        children:[
          {
            title:"长安区",
            id:"4a633ba7e3c777b485fa962c880379ad",
            path:"",
          },
          {
            title:"桥西区",
            id:"92ef1fcd2829cadc582a8fb67ad6eab4",
            path:"",
          }
        ]
      },
      {
        title: "唐山市",
        id: "d6c0bb03d361ae960ccffe9dbb51989d",
        path: "",
        children:[
          {
            title:"路南区",
            id:"38305fdff53f58a54bbe54633999e175",
            path:'',
          },
          {
            title:"路北区",
            id:"89e071b352a869b8298066028c8b0e5b",
            path:'',
          }
        ]
      },
      {
        title: "秦皇岛市",
        id: "ddb69689fd8964547edbdc82730573e9",
        path: "",
      }
    ]
  },
  {
    title: "山西省",
    children: [
      {
        title: "太原市",
        id: "45bb8d54c3f987f413c4e489908bc181",
        path: ""
      },
      {
        title: "大同市",
        id: "155f872ef336eec2c5f2ee0460a1a3fb",
        path: ""
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>