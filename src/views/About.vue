<template>
  <div>
    <h1>{{$t('about.title')}}</h1>
    <p>{{$t('about.desc')}}</p>
    <div style=" background: lightgray;">
      <img src />
      <!-- ../assets/alipay.png -->
      <img src />
      <!-- ../assets/wechat.png -->
    </div>
    <Divider>{{$t('about.sponsor')}}</Divider>
    <Tag color="cyan">someone</Tag>
  </div>
</template>
<style scoped>
img {
  width: 300px;
  margin: 30px;
}
</style>