<template>
    <div class="layout" id="app">
        <Layout>
            <Sider collapsible :collapsed-width="10" :style="{background: '#fff'}">
                <!-- <Avatar icon="ios-person" size="large" /> -->
                <Menu active-name="1-2" :theme="light" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1" to="/pages/list">
                        <Icon type="ios-list-box-outline" />
                        <span>文章</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-settings-outline" />
                        <span>设置</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-alert-outline" />
                        <span>关于</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Content :style="{background: '#fff', minHeight: '220px'}">
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
  export default {
    name: 'App',
    data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
  }
</script>

