# meowcloud

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm serve
```

### Compiles and minifies for production
```
pnpm build
```
## Preview in WeChat Mini Program

```bash
pnpm dev:mp-weixin
```

You can see a directory named `mp-weixin` in `dist/dev`

Open it with WeChat devtools

## Update log
### 重构项目到Vue3 - 2024-08-03
本项目已经从 Vue 2 迁移到 Vue3.
如果你需要从 Vue 2 迁移到 Vue 3，可以参考以下步骤：

1. **安装 Vue 3**：使用 `npm install vue@next` 更新 Vue 到最新版本。
2. **更新组件**：
  - 将 Vue 2 的 Options API 更新为 Composition API。
  - 修改生命周期钩子名称，例如 `beforeDestroy` 改为 `beforeUnmount`。
3. **更新依赖**：确保所有的 Vue 插件和依赖都兼容 Vue 3。

详细的迁移指南可以参考 [Vue 官方迁移指南](https://v3.vuejs.org/guide/migration/introduction.html)。
