<style scoped>
.layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
<template>
    <div>
        <Header class="layout-header-bar">
            <Input search enter-button="搜索" size="10" placeholder="输入文章标题" />
            <Button :size="small" icon="ios-download-outline" type="primary" to="/pages/edit">Download</Button>            
        </Header>
        <Content :style="{background: '#fff'}">
             <mavon-editor v-model="markdown"/>    
        </Content>
    </div>
</template>
<script>
export default {
    data(){
        return {
            markdown: ""
        }
    }
}
</script>