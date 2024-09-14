/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by vite-plugin-uni-pages

interface NavigateToOptions {
  url: "/pages/album/index" |
       "/pages/album/album-comments" |
       "/pages/album/edit-album" |
       "/pages/album/photo-details" |
       "/pages/album/team-space" |
       "/pages/index/index" |
       "/pages/index/request" |
       "/pages/login/index" |
       "/pages/meow-planet/index" |
       "/pages/mine/edit-profile" |
       "/pages/mine/index" |
       "/pages-sub/demo/index";
}
interface RedirectToOptions extends NavigateToOptions {}

interface SwitchTabOptions {
  url: "/pages/album/index" | "/pages/meow-planet/index" | "/pages/mine/index"
}

type ReLaunchOptions = NavigateToOptions | SwitchTabOptions;

declare interface Uni {
  navigateTo(options: UniNamespace.NavigateToOptions & NavigateToOptions): void;
  redirectTo(options: UniNamespace.RedirectToOptions & RedirectToOptions): void;
  switchTab(options: UniNamespace.SwitchTabOptions & SwitchTabOptions): void;
  reLaunch(options: UniNamespace.ReLaunchOptions & ReLaunchOptions): void;
}
