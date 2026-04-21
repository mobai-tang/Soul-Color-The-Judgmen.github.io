// 使用 APlayer - GitHub 开源项目 (https://github.com/DIYgod/APlayer)
// 初始化 APlayer 播放器
let ap = null;

function initAPlayer() {
    // 创建播放器容器
    const container = document.createElement('div');
    container.id = 'aplayer';
    container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 999;';
    document.body.appendChild(container);

    // 初始化 APlayer
    ap = new APlayer({
        container: document.getElementById('aplayer'),
        mini: true, // 迷你模式
        autoplay: false, // 浏览器策略限制，需要用户交互
        theme: '#e91e63', // 主题色
        loop: 'one', // 单曲循环
        order: 'list', // 列表顺序
        preload: 'auto', // 自动加载
        volume: 0.3, // 默认音量 30%
        mutex: true, // 防止多个播放器同时播放
        audio: [{
            name: 'Sakura Tears',
            artist: 'Background Music',
            url: 'Sakura Tears.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/mobai-tang/Soul-Color-The-Judgmen.github.io/images/loli.jpg' // 使用封面图
        }]
    });

    // 自动播放策略：用户首次交互时播放
    const tryAutoPlay = () => {
        ap.play().then(() => {
            console.log('🎵 APlayer 自动播放成功！');
        }).catch(error => {
            console.log('⏸ 自动播放被阻止，等待用户交互');
        });
    };

    // 页面加载时立即尝试
    setTimeout(tryAutoPlay, 500);

    // 用户交互时播放
    const userInteractionEvents = ['click', 'touchstart', 'keydown', 'scroll'];
    let hasUserInteracted = false;

    const onUserInteraction = () => {
        if (!hasUserInteracted && ap.audio.paused) {
            ap.play().then(() => {
                console.log('🎵 用户交互后音乐开始播放');
            });
            hasUserInteracted = true;
            
            // 移除所有监听器
            userInteractionEvents.forEach(event => {
                document.removeEventListener(event, onUserInteraction);
            });
        }
    };

    userInteractionEvents.forEach(event => {
        document.addEventListener(event, onUserInteraction, { passive: true, capture: true });
    });

    // 标签页可见性变化
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && ap.audio.paused) {
            tryAutoPlay();
        }
    });

    console.log('🎵 APlayer 初始化完成');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 检查 APlayer 是否已加载
    if (typeof APlayer !== 'undefined') {
        initAPlayer();
    } else {
        // 如果 APlayer 还未加载，等待一下
        const checkInterval = setInterval(() => {
            if (typeof APlayer !== 'undefined') {
                clearInterval(checkInterval);
                initAPlayer();
            }
        }, 100);

        // 超时处理
        setTimeout(() => {
            clearInterval(checkInterval);
            console.error('❌ APlayer 加载失败，请检查网络连接');
        }, 5000);
    }
});
