# 背景音乐使用说明

## 添加音乐文件

将你的背景音乐 MP3 文件放入 `music/` 文件夹中，建议文件名：
- `bgm1.mp3` - 第一首背景音乐
- `bgm2.mp3` - 第二首背景音乐
- `bgm3.mp3` - 第三首背景音乐

## 推荐音乐类型

由于这是一个深度心理测试游戏，建议选择以下类型的背景音乐：

### 推荐风格
- **氛围音乐 (Ambient)** - 空灵、神秘的氛围
- **极简钢琴 (Minimal Piano)** - 简单、沉思的钢琴曲
- **电子氛围 (Electronic Ambient)** - 轻柔的电子音效
- **新世纪音乐 (New Age)** - 冥想、放松的音乐

### 推荐艺术家
- **Brian Eno** - 氛围音乐大师
- **Max Richter** - 极简古典
- **Ólafur Arnalds** - 冰岛后古典
- **Nils Frahm** - 实验钢琴

### 免费音乐资源
1. **YouTube Audio Library** - https://www.youtube.com/audiolibrary
2. **Free Music Archive** - https://freemusicarchive.org/
3. **Incompetech** - https://incompetech.com/
4. **Bensound** - https://www.bensound.com/

## 修改播放列表

如果要修改播放列表，编辑 `music-player.js` 文件中的 `playlist` 数组：

```javascript
const bgMusicPlayer = new BackgroundMusicPlayer({
    volume: 0.3,  // 音量 0-1
    playlist: [
        'music/your-music-1.mp3',
        'music/your-music-2.mp3',
        'music/your-music-3.mp3'
    ]
});
```

## 功能说明

### 播放器功能
- ✅ 播放/暂停控制
- ✅ 音量调节（鼠标悬停显示）
- ✅ 自动播放下一首
- ✅ 循环播放
- ✅ 点击页面后自动开始播放

### 移动端适配
- 移动端只显示播放/暂停按钮
- 音量控制隐藏（使用系统音量）
- 按钮大小优化

## 注意事项

1. **浏览器自动播放策略**：现代浏览器要求用户先与页面交互才能播放音频，因此音乐会在用户第一次点击页面时开始播放。

2. **音频格式**：建议使用 MP3 格式，兼容性最好。

3. **文件大小**：建议每首背景音乐控制在 2-5MB，以保证加载速度。

4. **音量平衡**：确保所有音乐文件的音量一致，避免忽大忽小。
