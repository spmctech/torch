<style scoped>
.layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
<template>
    <div>
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