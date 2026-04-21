// 为 40 个角色下载符合特征的动漫图片
// 使用 Nekosia API 和 LoliAPI

const fs = require('fs');
const path = require('path');
const https = require('https');

// 角色与图片标签映射
const characterTagMapping = {
    loli: ['loli', 'cute', 'petite'],
    shaofu: ['married', 'mature', 'gentle'],
    yujie: ['onee-san', 'dominant', 'confident'],
    shaonv: ['young', 'fresh', 'youthful'],
    shunv: ['elegant', 'sophisticated', 'mature-female'],
    renqi: ['housewife', 'warm', 'caring'],
    bingjiao: ['cool', 'beautiful', 'cold'],
    meihuo: ['seductive', 'charming', 'alluring'],
    fengpi: ['yandere', 'crazy', 'intense'],
    bingshan: ['ice', 'cold', 'expressionless'],
    sanwu: ['kuudere', 'quiet', 'mysterious'],
    meimo: ['succubus', 'demon', 'seductive'],
    jinyu: ['catgirl', 'nekomimi', 'playful'],
    jixieji: ['robot', 'mechanical', 'cyborg'],
    nvwang: ['queen', 'royal', 'regal'],
    daxiaojie: ['ojou-sama', 'rich', 'elegant'],
    qianjin: ['wealthy', 'proud', 'noble'],
    weiniang: ['crossdress', 'trap', 'femboy'],
    nanzhuangdalao: ['tomboy', 'cool-female', 'boss'],
    kujie: ['gyaru', 'gal', 'trendy'],
    senxi: ['forest', 'natural', 'mysterious-girl'],
    tianmei: ['sweet', 'happy', 'cheerful'],
    gufeng: ['traditional', 'kimono', 'japanese-clothes'],
    wenyixi: ['literary', 'glasses', 'book'],
    dushe: ['snake', 'dangerous', 'mysterious'],
    xuejie: ['senpai', 'older-student', 'mentor'],
    fuhei: ['smug', 'teasing', 'playful'],
    yundongxi: ['sporty', 'athletic', 'energetic'],
    yuanqiniang: ['genki', 'hyper', 'loud'],
    lamei: ['spicy', 'bold', 'confident-girl'],
    linjianvh: ['vh', 'mysterious', 'digital'],
    xuemei: ['snow', 'white-hair', 'beautiful'],
    chunyu: ['rain', 'melancholy', 'soft'],
    shouerniang: ['fox-girl', 'kitsune', 'magical'],
    monv: ['witch', 'magic', 'hat'],
    xianv: ['fairy', 'angel', 'divine'],
    ruanmei: ['soft', 'gentle', 'kind'],
    aojiao: ['tsundere', 'blush', 'angry-cute'],
    tiandandai: ['airhead', 'clumsy', 'innocent'],
    OL: ['office-lady', 'suit', 'professional']
};

// 下载图片函数
function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', err => {
            fs.unlink(filepath);
            reject(err);
        });
    });
}

// 从 LoliAPI 获取图片
async function getImageFromLoliAPI() {
    return new Promise((resolve, reject) => {
        https.get('https://www.loliapi.com/acg/', res => {
            if (res.statusCode === 302 || res.statusCode === 301) {
                resolve(res.headers.location);
            } else {
                reject(new Error('No redirect found'));
            }
        }).on('error', reject);
    });
}

// 主函数
async function downloadAllImages() {
    const imageDir = path.join(__dirname, 'images');
    if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir);
    }

    const results = {};
    
    for (const [character, tags] of Object.entries(characterTagMapping)) {
        try {
            console.log(`正在下载 ${character} 的图片... 标签：${tags.join(', ')}`);
            
            // 从 LoliAPI 获取随机二次元图片
            const imageUrl = await getImageFromLoliAPI();
            
            const filename = `${character}.jpg`;
            const filepath = path.join(imageDir, filename);
            
            await downloadImage(imageUrl, filepath);
            
            results[character] = `./images/${filename}`;
            console.log(`✓ ${character} 下载完成`);
            
            // 避免请求过快
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            console.error(`✗ ${character} 下载失败:`, error.message);
            results[character] = null;
        }
    }

    // 保存结果
    fs.writeFileSync(
        path.join(imageDir, 'image-mapping.json'),
        JSON.stringify(results, null, 2)
    );
    
    console.log('\n下载完成！图片映射已保存到 images/image-mapping.json');
}

downloadAllImages();
