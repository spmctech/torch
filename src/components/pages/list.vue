<style scoped>
.layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
<template>
    <div>
        <Header class="layout-header-bar">
            <Row type="flex" justify="end" class="code-row-bg">
                <Col span="10">
                </Col>
                <Col span="6">
                    <Input search placeholder="输入文字搜索..." style="width: 150px"/>                         
                    <Button icon="ios-create-outline" type="primary" to="/pages/edit">新文章</Button> 
                </Col>
            </Row>
        </Header>
        <Content :style="{background: '#fff'}">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </Content>
    </div>
</template>
<script>
export default {
    
}
</script>