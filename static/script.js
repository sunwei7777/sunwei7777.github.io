// 扩展的运势签文数据库
const extendedFortuneSigns = [
    {
        id: 1,
        title: "上上签",
        icon: "fa-crown",
        color: "text-yellow-500",
        luckyColor: "金色、红色",
        luckyNumber: "8、9",
        advice: "宜积极行动，把握良机",
        content: {
            career: "事业运极佳，有机会获得重要突破，贵人相助，宜把握良机，展现才能",
            love: "感情运势旺盛，单身者有望遇到理想伴侣，已婚者感情更加甜蜜，适合表白求婚",
            wealth: "财运亨通，正财偏财皆有所获，投资理财可获满意回报，但需理性规划",
            health: "身体健康，精神饱满，适合开展新的健身计划，注意均衡饮食",
            study: "学业运极佳，考试顺利，学习效率高，适合深造进修",
            travel: "出行顺利，旅途愉快，可能遇到意想不到的美好经历",
            general: "今日运势极佳，诸事顺利，心想事成，宜积极行动，展现自我"
        }
    },
    {
        id: 2,
        title: "中上签",
        icon: "fa-sun",
        color: "text-orange-500",
        luckyColor: "橙色、黄色",
        luckyNumber: "3、6",
        advice: "稳中求进，保持乐观",
        content: {
            career: "工作进展顺利，与同事合作愉快，但需注意细节问题，避免粗心大意",
            love: "感情稳定发展，沟通顺畅，适合与伴侣共度美好时光，增进感情",
            wealth: "财运平稳，收入稳定，可适当进行小额投资，避免冲动消费",
            health: "健康状况良好，注意劳逸结合，避免过度劳累，适当运动",
            study: "学业运良好，学习状态稳定，适合巩固基础知识，查漏补缺",
            travel: "出行顺利，适合短途旅行，放松心情，享受生活",
            general: "运势平稳向上，各方面进展顺利，保持积极心态即可"
        }
    },
    {
        id: 3,
        title: "中平签",
        icon: "fa-cloud",
        color: "text-blue-500",
        luckyColor: "蓝色、绿色",
        luckyNumber: "2、5",
        advice: "保持现状，等待时机",
        content: {
            career: "工作状态平稳，按部就班即可，不宜冒进，注意团队协作",
            love: "感情生活平淡，需要主动创造浪漫氛围，增进彼此了解",
            wealth: "财运一般，收支平衡，不宜进行高风险投资，理性消费",
            health: "身体无恙，但需注意饮食卫生和作息规律，保持良好生活习惯",
            study: "学业运平稳，需要加强自律，制定合理学习计划，循序渐进",
            travel: "出行无大碍，但需提前规划，注意天气变化，做好充分准备",
            general: "运势平平，无大起大落，保持平常心，做好分内之事"
        }
    },
    {
        id: 4,
        title: "中下签",
        icon: "fa-cloud-rain",
        color: "text-gray-500",
        luckyColor: "灰色、白色",
        luckyNumber: "4、7",
        advice: "谨慎行事，避免冲动",
        content: {
            career: "工作可能遇到小挫折，保持耐心，问题终将解决，寻求同事帮助",
            love: "感情可能出现小摩擦，需要多些理解和包容，加强沟通交流",
            wealth: "财运欠佳，需谨慎理财，避免不必要的开支，暂缓重大投资",
            health: "身体略有不适，及时休息调养即可恢复，注意饮食调理",
            study: "学业运稍差，可能遇到学习瓶颈，需要调整学习方法，寻求师长指导",
            travel: "出行需谨慎，可能遇到小麻烦，提前做好准备，注意安全",
            general: "运势稍有波折，需保持冷静，理性应对，避免情绪化决策"
        }
    },
    {
        id: 5,
        title: "下下签",
        icon: "fa-cloud-showers-heavy",
        color: "text-purple-500",
        luckyColor: "紫色、黑色",
        luckyNumber: "1、4",
        advice: "韬光养晦，静待时机",
        content: {
            career: "工作压力较大，需调整心态，寻求同事帮助，避免重大决策",
            love: "感情运势低迷，需要给彼此一些空间和时间，反思关系问题",
            wealth: "财运不济，宜保守理财，避免重大投资决策，控制消费欲望",
            health: "健康需多加注意，如有不适及时就医检查，保持良好作息",
            study: "学业运较差，考试可能不顺，需要加倍努力，寻求帮助",
            travel: "出行不利，建议暂缓远行，如必须出行需做好充分准备",
            general: "运势低迷，诸事不顺，宜保持低调，修养身心，等待时机好转"
        }
    },
    {
        id: 6,
        title: "转运签",
        icon: "fa-sync-alt",
        color: "text-green-500",
        luckyColor: "绿色、青色",
        luckyNumber: "6、9",
        advice: "转变思路，寻求突破",
        content: {
            career: "工作面临转折点，需要改变策略，寻找新的发展方向",
            love: "感情关系需要调整，可能迎来新的开始，给彼此新的机会",
            wealth: "财运即将转变，需要耐心等待，做好充分准备迎接机会",
            health: "健康状况将有好转，坚持调理，保持积极心态",
            study: "学业将迎来转机，需要调整学习方法，抓住关键点",
            travel: "出行可能有意想不到的收获，适合探索新的地方",
            general: "运势处于转变期，保持开放心态，勇于尝试新事物"
        }
    },
    {
        id: 7,
        title: "贵人签",
        icon: "fa-hands-helping",
        color: "text-pink-500",
        luckyColor: "粉色、米色",
        luckyNumber: "3、8",
        advice: "广结善缘，寻求合作",
        content: {
            career: "将得到贵人相助，工作进展顺利，适合拓展人脉关系",
            love: "可能通过朋友介绍遇到合适对象，或得到亲友的支持和祝福",
            wealth: "通过合作获得财富机会，适合团队协作，共同发展",
            health: "得到专业医生的良好建议，健康状况将明显改善",
            study: "得到师长指点，学习效率提高，考试运提升",
            travel: "旅途中可能遇到热心帮助，行程更加顺利愉快",
            general: "贵人运旺盛，遇到困难时容易得到帮助，宜多与人交流合作"
        }
    },
    {
        id: 8,
        title: "智慧签",
        icon: "fa-lightbulb",
        color: "text-indigo-500",
        luckyColor: "靛蓝色、银色",
        luckyNumber: "5、7",
        advice: "冷静思考，明智决策",
        content: {
            career: "需要运用智慧解决问题，理性分析，找到最佳解决方案",
            love: "感情需要理性对待，避免情绪化，通过沟通化解矛盾",
            wealth: "理性投资，避免盲目跟风，通过分析做出正确判断",
            health: "通过科学方法调理身体，关注心理健康，保持平衡",
            study: "学习需要讲究方法，理解比死记硬背更重要",
            travel: "出行前做好充分准备，制定详细计划，避免意外情况",
            general: "智慧运上升，适合学习思考，做出重要决策，解决问题"
        }
    },
    {
        id: 9,
        title: "机遇签",
        icon: "fa-door-open",
        color: "text-teal-500",
        luckyColor: "青色、蓝色",
        luckyNumber: "2、8",
        advice: "把握机会，勇敢尝试",
        content: {
            career: "面临重要发展机会，需要勇敢把握，展现自己的能力",
            love: "遇到新的感情机会，单身者可能开始新恋情，已婚者感情升级",
            wealth: "出现不错的投资机会，但需要谨慎评估风险，理性决策",
            health: "找到适合的健康管理方法，身体状况将明显改善",
            study: "学习上迎来突破机会，可能获得重要奖项或荣誉",
            travel: "可能有意外的好运旅行机会，适合尝试新的旅行方式",
            general: "机遇运旺盛，适合尝试新事物，开拓新领域，实现突破"
        }
    },
    {
        id: 10,
        title: "平安签",
        icon: "fa-shield-alt",
        color: "text-emerald-500",
        luckyColor: "绿色、白色",
        luckyNumber: "4、6",
        advice: "稳守阵地，确保安全",
        content: {
            career: "工作环境稳定，无大风险，适合稳步发展，积累经验",
            love: "感情关系稳定和谐，无大风浪，平淡中见真情",
            wealth: "财务状况稳定，无大起大落，适合保守理财",
            health: "身体健康平安，无大疾病，保持良好生活习惯即可",
            study: "学业平稳无波折，按计划学习即可取得满意成绩",
            travel: "出行平安顺利，无意外情况，适合日常出行",
            general: "平安是福，今日无大灾大难，一切安好，珍惜当下"
        }
    }
];

// 特殊运势类型
const specialFortuneTypes = {
    career: {
        name: "事业运势",
        icon: "fa-briefcase",
        description: "工作发展、职业规划、职场关系"
    },
    love: {
        name: "爱情运势", 
        icon: "fa-heart",
        description: "感情发展、恋爱关系、婚姻生活"
    },
    wealth: {
        name: "财运运势",
        icon: "fa-money-bill-wave",
        description: "财富积累、投资理财、经济状况"
    },
    health: {
        name: "健康运势",
        icon: "fa-heartbeat", 
        description: "身体健康、精神状态、养生调理"
    },
    study: {
        name: "学业运势",
        icon: "fa-graduation-cap",
        description: "学习效率、考试成绩、知识积累"
    },
    travel: {
        name: "出行运势", 
        icon: "fa-plane",
        description: "旅行顺利、交通安全、外出运势"
    },
    general: {
        name: "综合运势",
        icon: "fa-star",
        description: "整体运势、生活状态、发展趋势"
    }
};

// 运势建议库
const fortuneAdvice = {
    career: [
        "保持专业态度，展现你的能力",
        "与同事建立良好关系，团队合作很重要",
        "制定明确目标，逐步实现职业规划",
        "学习新技能，提升职场竞争力",
        "注意工作细节，避免不必要的失误"
    ],
    love: [
        "真诚沟通是感情的基础",
        "给彼此适当的空间和自由",
        "创造浪漫时刻，保持感情新鲜感",
        "尊重对方的选择和想法",
        "共同规划未来，建立长久关系"
    ],
    wealth: [
        "理性消费，做好财务规划",
        "分散投资风险，不要把所有鸡蛋放在一个篮子里",
        "关注长期收益，而非短期波动",
        "学习理财知识，提高财商",
        "保持适度储蓄，应对不时之需"
    ],
    health: [
        "均衡饮食，适量运动",
        "保持良好作息，避免熬夜",
        "定期体检，关注身体状况",
        "心理健康同样重要，学会释放压力",
        "培养健康的生活习惯"
    ],
    study: [
        "制定合理的学习计划",
        "注重理解而非死记硬背",
        "及时复习巩固，避免知识遗忘",
        "寻求师长指导，解决学习难题",
        "保持学习热情，享受知识乐趣"
    ],
    travel: [
        "提前规划行程，做好充分准备",
        "注意交通安全，遵守交通规则",
        "关注天气变化，准备相应物品",
        "尊重当地文化，文明出行",
        "保持开放心态，享受旅途美好"
    ]
};

// 增强版运势抽签应用
class EnhancedFortuneApp {
    constructor() {
        this.history = null//new FortuneHistory();
        this.currentSign = null;
        this.isDrawnToday = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        // this.updateDateDisplay();
        // this.checkTodayStatus();
        this.populateFortuneTypes();
    }

    populateFortuneTypes() {
        const fortuneTypeSelect = document.getElementById('fortuneType');
        fortuneTypeSelect.innerHTML = '';
        
        Object.entries(specialFortuneTypes).forEach(([key, type]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = type.name;
            fortuneTypeSelect.appendChild(option);
        });
    }

    setupEventListeners() {
        // 抽签按钮
        document.getElementById('drawBtn').addEventListener('click', () => {
            this.drawFortune();
        });

        // 重置按钮
        document.getElementById('resetBtn').addEventListener('click', () => {
            this.resetFortune();
        });

        // 设置面板
        document.getElementById('settingsBtn').addEventListener('click', () => {
            this.showSettings();
        });

        document.getElementById('closeSettings').addEventListener('click', () => {
            this.hideSettings();
        });

        // 历史记录按钮
        /* document.getElementById('historyBtn').addEventListener('click', () => {
            this.showHistory();
        }); */

        // 分享按钮
        /* document.getElementById('shareBtn').addEventListener('click', () => {
            this.shareResult();
        }); */

        // 运势类型切换
        document.getElementById('fortuneType').addEventListener('change', (e) => {
            this.updateTypeDescription(e.target.value);
        });

        // 设置面板点击外部关闭
        document.getElementById('settingsPanel').addEventListener('click', (e) => {
            if (e.target.id === 'settingsPanel') {
                this.hideSettings();
            }
        });

        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === 'd' && e.ctrlKey) {
                e.preventDefault();
                this.drawFortune();
            }
            if (e.key === 'r' && e.ctrlKey) {
                e.preventDefault();
                this.resetFortune();
            }
        });
    }

    updateTypeDescription(type) {
        const typeInfo = specialFortuneTypes[type];
        const descriptionElement = document.getElementById('typeDescription');
        if (descriptionElement && typeInfo) {
            descriptionElement.textContent = typeInfo.description;
        }
    }

    drawFortune() {
        if (this.isDrawnToday) {
            this.showMessage('今天已经抽过签了，请明天再来吧！', 'warning');
            return;
        }

        // 震动效果
        const signContainer = document.getElementById('signContainer');
        const drawBtn = document.getElementById('drawBtn');
        
        signContainer.classList.add('shake', 'glow');
        drawBtn.disabled = true;
        drawBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>抽签中...';

        // 模拟抽签过程
        setTimeout(() => {
            const fortuneType = document.getElementById('fortuneType').value;
            const randomSign = this.getRandomSign();
            
            this.currentSign = randomSign;
            this.isDrawnToday = true;
            
            // 保存记录
            // this.history.addRecord(randomSign, fortuneType);
            
            // 显示结果
            this.showEnhancedResult(randomSign, fortuneType);
            
            // 移除动画效果
            signContainer.classList.remove('shake', 'glow');
            drawBtn.disabled = false;
            drawBtn.innerHTML = '<i class="fas fa-hand-point-up mr-2"></i>抽取今日运势';
        }, 2000);
    }

    getRandomSign() {
        // 更复杂的概率分布
        const weights = [0.08, 0.12, 0.3, 0.2, 0.1, 0.08, 0.06, 0.04, 0.01, 0.01];
        let random = Math.random();
        let cumulativeWeight = 0;

        for (let i = 0; i < weights.length; i++) {
            cumulativeWeight += weights[i];
            if (random <= cumulativeWeight) {
                return extendedFortuneSigns[i];
            }
        }
        return extendedFortuneSigns[2]; // 默认返回中平签
    }

    showEnhancedResult(sign, type) {
        // 隐藏欢迎信息
        document.getElementById('welcomeMsg').classList.add('hidden');
        
        // 更新签筒显示
        const signContent = document.getElementById('signContent');
        signContent.innerHTML = `
            <div class="text-center">
                <i class="fas ${sign.icon} ${sign.color} text-6xl mb-2"></i>
                <div class="text-2xl font-bold ${sign.color}">${sign.title}</div>
            </div>
        `;

        // 显示结果区域
        const resultArea = document.getElementById('resultArea');
        const resultIcon = document.getElementById('resultIcon');
        const resultTitle = document.getElementById('resultTitle');
        const resultContent = document.getElementById('resultContent');

        resultIcon.className = `fas ${sign.icon} ${sign.color}`;
        resultTitle.textContent = sign.title;
        resultTitle.className = `text-xl font-semibold ${sign.color}`;
        
        // 构建详细的结果内容
        resultContent.innerHTML = this.buildResultHTML(sign, type);
        
        resultArea.classList.remove('hidden');
        resultArea.classList.add('fade-in');

        // 更新控制按钮状态
        this.updateControlButtons(true);
    }

    buildResultHTML(sign, type) {
        const typeInfo = specialFortuneTypes[type];
        const randomAdvice = fortuneAdvice[type] ? 
            fortuneAdvice[type][Math.floor(Math.random() * fortuneAdvice[type].length)] : 
            "保持冷静客观的心态，所得结果仅供参考";

        return `
            <div class="space-y-4">
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
                    <div class="flex items-center mb-2">
                        <i class="fas ${typeInfo.icon} text-blue-500 mr-2"></i>
                        <span class="font-semibold text-blue-800">${typeInfo.name}解读</span>
                    </div>
                    <div class="text-gray-700 leading-relaxed">${sign.content[type]}</div>
                </div>
                
                ${type === 'general' ? '' : `
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div class="font-semibold text-gray-700 mb-2">综合运势参考</div>
                <div class="text-gray-600 text-sm">${sign.content.general}</div>
                </div>
                `}

                <div class="grid grid-cols-2 gap-3 text-sm">
                    <div class="bg-white p-3 rounded-lg border border-gray-200">
                        <div class="text-gray-500 mb-1">幸运颜色</div>
                    <div class="font-semibold ${sign.color}">${sign.luckyColor}</div>
                </div>
                <div class="bg-white p-3 rounded-lg border border-gray-200">
                        <div class="text-gray-500 mb-1">幸运数字</div>
                        <div class="font-semibold">${sign.luckyNumber}</div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
                        <span class="font-semibold text-yellow-700">今日建议</span>
                    </div>
                    <div class="text-gray-700">${sign.advice}</div>
                </div>
                
                <div class="bg-green-50 p-4 rounded-xl border border-green-200">
                    <div class="flex items-center mb-2">
                        <i class="fas fa-comments text-green-500 mr-2"></i>
                        <span class="font-semibold text-green-700">运势贴士</span>
                    </div>
                    <div class="text-gray-700 text-sm">${randomAdvice}</div>
                </div>

                <div class="text-center pt-4 border-t border-gray-200">
                    <p class="text-xs text-gray-500">保持冷静客观的心态，所得结果仅供参考</p>
                </div>
            </div>
        `;
    }

    updateControlButtons(isDrawn) {
        const drawBtn = document.getElementById('drawBtn');
        const resetBtn = document.getElementById('resetBtn');
        // const shareBtn = document.getElementById('shareBtn');
        
        if (isDrawn) {
            drawBtn.disabled = true;
            drawBtn.classList.add('opacity-50', 'cursor-not-allowed');
            resetBtn.classList.remove('hidden');
            // shareBtn.classList.remove('hidden');
        } else {
            drawBtn.disabled = false;
            drawBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            resetBtn.classList.add('hidden');
            // shareBtn.classList.add('hidden');
        }
    }

    resetFortune() {
        this.currentSign = null;
        this.isDrawnToday = false;
        
        // 重置签筒显示
        const signContent = document.getElementById('signContent');
        signContent.innerHTML = `<i class="fas fa-question text-4xl text-amber-600"></i>`;
        
        // 显示欢迎信息，隐藏结果
        document.getElementById('welcomeMsg').classList.remove('hidden');
        document.getElementById('resultArea').classList.add('hidden');
        
        // 重置按钮状态
        this.updateControlButtons(false);
    }

    showHistory() {
        const history = this.history.history.slice(0, 10); // 显示最近10条记录
        
        const historyHTML = history.map(record => {
            const sign = extendedFortuneSigns.find(s => s.id === record.sign.id) || record.sign;
            return `
                <div class="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center">
                            <i class="fas ${sign.icon} ${sign.color} mr-2"></i>
                        <span class="font-semibold ${sign.color}">${sign.title}</span>
                    </div>
                    <div class="text-sm text-gray-600 mb-1">${new Date(record.date).toLocaleDateString('zh-CN')}</div>
                    <div class="text-xs text-gray-500">${specialFortuneTypes[record.type].name}</div>
                </div>
            `;
        }).join('');
        
        this.showModal('历史记录', historyHTML || '<p class="text-gray-500 text-center">暂无历史记录</p>');
    }

    shareResult() {
        if (!this.currentSign) return;
        
        const shareText = `今日运势：${this.currentSign.title} - ${this.currentSign.advice}`;
        
        if (navigator.share) {
            navigator.share({
                title: '我的今日运势',
                text: shareText,
                url: window.location.href
            }).catch(() => {
                this.copyToClipboard(shareText);
            });
        } else {
            this.copyToClipboard(shareText);
        }
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showMessage('运势结果已复制到剪贴板', 'success');
        });
    }

    showModal(title, content) {
        const modalHTML = `
            <div id="customModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">${title}</h3>
                    <button onclick="document.getElementById('customModal').remove()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div>${content}</div>
        </div>
    </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    showSettings() {
        document.getElementById('settingsPanel').classList.remove('hidden');
    }

    hideSettings() {
        document.getElementById('settingsPanel').classList.add('hidden');
    }

    showMessage(message, type = 'info') {
        const colors = {
            info: 'bg-blue-500',
            warning: 'bg-yellow-500',
            success: 'bg-green-500',
            error: 'bg-red-500'
        };

        const messageDiv = document.createElement('div');
        messageDiv.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg fade-in z-50`
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// 初始化增强版应用
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedFortuneApp();
});