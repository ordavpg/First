// 题目描述：
// 端午节要到了，粽子店针对小朋友研发了一种卡通粽子。为了打广告，店铺举办了一个活动：
// 前 n 个索要粽子的小朋友都能拿到粽子；
// 每个小朋友至少发 1 个粽子；
// 粽子店还准备了 n 张卡片，前 n 个小朋友每人抽一张，卡片有两种：
// '+'：抽到表示下一个小朋友拿到的粽子比自己多；
// '-'：抽到表示下一个小朋友拿到的粽子比自己少。
// 所有小朋友抽完卡后，粽子店统一发放粽子。
// 请你计算：在满足所有卡片要求的前提下，最少需要发放多少个粽子。
// 输入格式:
// 第一行：一个正整数 n（1 ≤ n ≤ 500 000）
// 第二行：一个长度为 n 的字符串，仅包含字符 '+' 和 '-'
// 输出格式:
// 一个正整数，表示最少发放的粽子总数
// 样例输入:
// 3
// --+
// 样例输出:
// 8
// 对应最优方案之一：[3, 2, 1, 2]（共 8 个粽子）
// 使用 while(line = read_line()) 来读取输入，并在模板中写代码

// 定义一个模拟的 read_line 函数，测试时可以根据实际情况修改
// 在实际环境中，可以用 Node.js 的 readline 模块来读取输入

function readLines() {
    // 这里使用 Node.js 的方式读取所有输入
    return require('fs').readFileSync(0, 'utf-8').split(/\r?\n/).filter(line => line.length > 0);
}

function main() {
    const lines = readLines();
    let index = 0;
    // 当还有输入时继续处理
    while (index < lines.length) {
        // 读入第一个数字 n
        const n = parseInt(lines[index++], 10);
        // 读入卡片字符串
        const s = lines[index++].trim();
        
        // 总共有 n+1 个小朋友，每个小朋友至少拿 1 个粽子
        const zongzi = new Array(n + 1).fill(1);

        // 从左向右遍历，如果卡片为 '+'，后一个小朋友的粽子数 = 前一个 + 1
        for (let i = 0; i < n; i++) {
            if (s[i] === '+') {
                zongzi[i + 1] = zongzi[i] + 1;
            }
        }

        // 从右向左遍历，如果卡片为 '-'，前一个小朋友的粽子数至少比后一个大 1
        for (let i = n - 1; i >= 0; i--) {
            if (s[i] === '-' && zongzi[i] <= zongzi[i + 1]) {
                zongzi[i] = zongzi[i + 1] + 1;
            }
        }

        // 计算所有小朋友拿到的总粽子数
        const total = zongzi.reduce((sum, num) => sum + num, 0);
        console.log(total);
    }
}

// 执行主函数
main();
