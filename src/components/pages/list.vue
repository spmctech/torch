<style scoped>
.layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
<template>
    <div>
        <Header class="layout-header-bar">
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <MenuItem name="1">
                    <Input search enter-button="搜索" size="10" placeholder="输入文章标题" />
                </MenuItem>
                <MenuItem name="2" to="/pages/edit">
                    <Button :size="small" icon="ios-download-outline" type="primary">Download</Button>  
                </MenuItem>
            </Menu>    
        </Header>
        <Content :style="{background: '#fff'}">
            
        </Content>
    </div>
</template>
<script>
export default {
    
}
</script>