// 背景音乐播放器
class BackgroundMusicPlayer {
    constructor(options = {}) {
        this.audio = new Audio();
        this.isPlaying = false;
        this.volume = options.volume || 0.3; // 默认音量 30%
        this.playlist = options.playlist || [];
        this.currentIndex = 0;
        this.isMuted = false;
        
        // 初始化音频
        this.audio.volume = this.volume;
        this.audio.loop = true;
        
        // 如果有播放列表，加载第一首
        if (this.playlist.length > 0) {
            this.loadTrack(this.currentIndex);
        }
        
        // 监听播放结束
        this.audio.addEventListener('ended', () => {
            if (this.playlist.length > 1) {
                this.next();
            }
        });
    }
    
    // 加载曲目
    loadTrack(index) {
        if (index < 0 || index >= this.playlist.length) return;
        
        this.currentIndex = index;
        this.audio.src = this.playlist[index];
        this.audio.load();
        
        if (this.isPlaying) {
            this.play();
        }
    }
    
    // 播放
    play() {
        this.audio.play().then(() => {
            this.isPlaying = true;
            if (this.onStateChange) {
                this.onStateChange(true);
            }
        }).catch(error => {
            console.log('播放失败:', error);
            this.isPlaying = false;
        });
    }
    
    // 暂停
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        if (this.onStateChange) {
            this.onStateChange(false);
        }
    }
    
    // 切换播放/暂停
    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    // 下一首
    next() {
        const nextIndex = (this.currentIndex + 1) % this.playlist.length;
        this.loadTrack(nextIndex);
    }
    
    // 设置音量
    setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        this.audio.volume = this.volume;
        this.isMuted = this.volume === 0;
        
        if (this.onVolumeChange) {
            this.onVolumeChange(this.volume);
        }
    }
    
    // 静音切换
    toggleMute() {
        if (this.isMuted) {
            this.setVolume(this.volume > 0 ? this.volume : 0.3);
        } else {
            this.setVolume(0);
        }
    }
    
    // 获取播放状态
    getState() {
        return {
            isPlaying: this.isPlaying,
            volume: this.volume,
            isMuted: this.isMuted,
            currentTrack: this.playlist[this.currentIndex]
        };
    }
}

// 创建 UI 组件
function createMusicPlayerUI(player) {
    // 创建容器
    const container = document.createElement('div');
    container.className = 'bg-music-player';
    
    // 创建播放按钮
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'music-toggle-btn';
    toggleBtn.innerHTML = `
        <svg class="play-icon" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
        </svg>
        <svg class="pause-icon" viewBox="0 0 24 24" style="display:none;">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
    `;
    
    // 创建音量控制
    const volumeControl = document.createElement('div');
    volumeControl.className = 'music-volume-control';
    volumeControl.innerHTML = `
        <svg class="music-volume-icon" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
        <input type="range" class="music-volume-slider" min="0" max="100" value="30">
    `;
    
    // 组装
    container.appendChild(toggleBtn);
    container.appendChild(volumeControl);
    document.body.appendChild(container);
    
    // 绑定事件
    toggleBtn.addEventListener('click', () => {
        player.toggle();
    });
    
    // 音量滑块
    const volumeSlider = volumeControl.querySelector('.music-volume-slider');
    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value / 100;
        player.setVolume(value);
    });
    
    // 显示音量控制
    toggleBtn.addEventListener('mouseenter', () => {
        volumeControl.classList.add('visible');
    });
    
    toggleBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            volumeControl.classList.remove('visible');
        }, 500);
    });
    
    // 监听播放状态变化
    player.onStateChange = (isPlaying) => {
        const playIcon = toggleBtn.querySelector('.play-icon');
        const pauseIcon = toggleBtn.querySelector('.pause-icon');
        
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            toggleBtn.classList.add('playing');
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            toggleBtn.classList.remove('playing');
        }
    };
    
    // 监听音量变化
    player.onVolumeChange = (volume) => {
        volumeSlider.value = volume * 100;
    };
    
    return container;
}

// 初始化背景音乐播放器
function initBackgroundMusic() {
    // 创建播放器实例
    const bgMusicPlayer = new BackgroundMusicPlayer({
        volume: 0.3,
        playlist: [
            'Sakura Tears.mp3'
        ]
    });
    
    // 创建 UI
    createMusicPlayerUI(bgMusicPlayer);
    
    // 立即尝试播放（不等待 load 事件）
    const tryAutoPlay = () => {
        bgMusicPlayer.play().then(() => {
            console.log('🎵 音乐自动播放成功！');
        }).catch(error => {
            console.log('⏸ 自动播放被浏览器阻止，等待用户交互');
        });
    };
    
    // 策略 1: DOMContentLoaded 时立即尝试
    tryAutoPlay();
    
    // 策略 2: window load 时再次尝试
    window.addEventListener('load', () => {
        setTimeout(tryAutoPlay, 100);
    });
    
    // 策略 3: 用户任何交互时立即播放
    const userInteractionEvents = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    let hasUserInteracted = false;
    
    const onUserInteraction = () => {
        if (!hasUserInteracted && !bgMusicPlayer.isPlaying) {
            bgMusicPlayer.play().then(() => {
                console.log('🎵 用户交互后音乐开始播放');
            });
            hasUserInteracted = true;
            
            // 移除所有监听器
            userInteractionEvents.forEach(event => {
                document.removeEventListener(event, onUserInteraction);
            });
        }
    };
    
    // 添加所有交互事件的监听
    userInteractionEvents.forEach(event => {
        document.addEventListener(event, onUserInteraction, { passive: true, capture: true });
    });
    
    // 策略 4: 可见性改变时尝试（用户切换回标签页）
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && !bgMusicPlayer.isPlaying) {
            tryAutoPlay();
        }
    });
    
    return bgMusicPlayer;
}

// 导出到全局
window.bgMusicPlayer = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    window.bgMusicPlayer = initBackgroundMusic();
});
