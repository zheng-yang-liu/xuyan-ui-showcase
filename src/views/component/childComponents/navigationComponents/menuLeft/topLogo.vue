<template>
  <div style="height: 200px;background-color: #f9f9fc;display: inline-block">
    <xy-menu-left :menuItems="menuItems">
      <template #logo>
        <div class="logo">
          <img src="../../../../../assets/logo.png">
          <p>xuyan</p>
        </div>
      </template>
    </xy-menu-left>
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
      },
      {
        title: "唐山市",
        id: "d6c0bb03d361ae960ccffe9dbb51989d",
        path: "",
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

<style scoped>
.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #e0f0ff;
  padding: 0 10px;
}
.logo img {
  width: 20px;
  height: 20px;
}
.logo p {
  font-size: 20px;
  margin-left: 6px;
  color: #409eff;
}
</style>