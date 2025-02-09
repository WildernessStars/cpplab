import { CodeBlock } from "@/components/ui/code-block"

export default function DataTypesPage() {
  return (
    <div className="space-y-6">
      <div>
      {/* className="leading-10" */}
        <h1 className="text-3xl font-bold leading-10">进制与基底</h1>
        <p className="text-muted-foreground mt-2 leading-10">数组是由多个同类型数据所组成的一个整体，用序号或者下标来区分各个数据，定义格式如下:首先，我们先思考这么一个问题:在计算时间时，我们常常用时、分、秒去表示时间的长度，例如60秒等于1分钟，60分钟等于1小时。</p>
        <p className="text-muted-foreground mt-2 leading-10 ">
        请问:
        <li>80 秒是几分几秒?</li>
        <li> 4250 秒是几时几分几秒?</li>
        <li>82分3秒是多少秒?</li>
        <li>41小时 20分3秒是多少秒?</li>
        需要注意的是,这里的&quot;几&quot;均是不小于0且小于 60 的整数我们把它叫做<strong>位权</strong>
        </p>
        <p className="text-muted-foreground mt-2 leading-10">
        我们会发现，时、分、秒之间的进位关系是满六十进一，这种计数方式我们可以称为<strong>六十进制</strong>。而数字 60 也被我们称为六十进制的“基底”。

        </p>
        <p className="text-muted-foreground mt-2 leading-10">生活中，我们常用的进制是十进制，而在计算机中，我们常用的进制是二进制、八进制和十六进制。为了方便程序和生活的使用，这个时候我们往往就需要把十进制转换成多进制，或者是把多进制转换成十进制。
        
        <li>二进制是 Binary，简写为 B</li>
        <li>八进制是 Octal，简写为 O</li>
        <li>十进制为 Decimal，简写为 D</li>
        <li>十六进制为 Hexadecimal，简写为 H</li></p>
      </div>
      
      <div>
      <h1 className="text-3xl font-bold">十进制转换其他进制</h1>
      <p className="text-muted-foreground mt-2 leading-10">十进制是如何转换为其他进制的呢?</p>

      <p className="text-muted-foreground mt-2 leading-10">当我们不用默认值对数组元素进行初始化的时候，该如何实现呢?</p>
      <p className="text-muted-foreground mt-2 leading-10">“80 秒”是十进制的表示方式，我们可以通过 80 ÷ 60=1…· 20 得到， 80 秒等于1分 20 秒。</p>
      <p className="text-muted-foreground mt-2 leading-10"> 同样的，对于“ 4250 秒”，我们可以通过 4250÷60 =10…50 得到， 4250 秒等于 70 分50 秒。然后又通过 70 ÷ 60 =1…10, 得到4250秒等于1时10分50 秒。</p>
      <p className="text-muted-foreground mt-2 leading-10"> 这个方法其实就叫<strong>短除法</strong>。 </p>
        <CodeBlock code={`#include <iostream>
using namespace std;

int main() {
    int num;
    cin >> num;
    int res[32];
    int index = 0;
    while (num > 0) {
        res[index++] = num % 2; 
        num /= 2;         
    }
    for(int i = index-1; i >= 0; i--){
        cout<<res[i];
    }
    cout<<endl;
    return 0;
}`} language="cpp" />
        <p className="text-muted-foreground mt-2 leading-10">如果是手算，那么也可以用<strong>位权展开法</strong>。</p>
        <p className="text-muted-foreground mt-2 leading-10">以十进制数 13 为例来转换为二进制。</p>
        <p className="text-muted-foreground mt-2 leading-10">首先，要找到不超过 13 的最大的 2 的幂次方数，这里是 2 的 3 次方即 8。所以在二进制的第 4 位（从右往左数）写 1，此时 13-8=5。</p>
        <p className="text-muted-foreground mt-2 leading-10">接着看 2 的 2 次方即 4，5 大于 4，所以在二进制的第 3 位写 1，5-4=1。</p>
        <p className="text-muted-foreground mt-2 leading-10">再看 2 的 1 次方即 2，1 小于 2，所以在二进制的第 2 位写 0。</p>
        <p className="text-muted-foreground mt-2 leading-10">最后看 2 的 0 次方即 1，刚好 1 等于 1，在二进制的第 1 位写 1。</p>
        <p className="text-muted-foreground mt-2 leading-10">这样，十进制数 13 转换为二进制就是 1101。</p>
        <CodeBlock code={`13    = 2^3   +   2^2   + 0 + 1
____  ->  1___  ->  11__  -> 1101`} language="cpp" />
        <p className="text-muted-foreground mt-2 leading-10">值得一提的是，在进制表示中，如果基数超过10的进制数，通常用字母 A 表示 10，字母 B 表示 11，字母 ℃ 表示 12,……，以此类推。
因此，当进制转换超过 10时，我们通常用字符数组去表示这个数，我们可以按照下面对应关系把十进制数转化成十六进制数。
<CodeBlock code={`char digit[20] = {'0' '1',"2','3','4','5' '6' ,'7''8','9',A''B''C','D' 'E''F};`} language="cpp" /></p>
        </div>
      
      <div>
 
        <h1 className="text-3xl font-bold">其他进制转换十进制</h1>
      <p className="text-muted-foreground mt-2 leading-10">“2分3 秒”是我们使用到的六十进制的表示方式，而我们可以通过
      2*601+3*600=123换算成秒，此时 123 秒是我们常用的十进制表示方式。</p>
      <p className="text-muted-foreground mt-2 leading-10">同样的，对于“1小时20分3秒”，我们可以通过1*60^2 +20*60^1+3*60^0=4803
      换算成秒，此时 4803 秒是我们常用的十进制表示方式,</p>
      <p className="text-muted-foreground mt-2 leading-10">所以，对于2 进制(110)2，我们可以通过式子(110)2=1*2^2+1*2^1+0*2^0 =6得到对应十进制的结果。</p>
      <p className="text-muted-foreground mt-2 leading-10">二进制转十进制</p>
      <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string binary;
    cout << "请输入一个二进制数: ";
    cin >> binary;

    int decimal = 0;
    for (char bit : binary) {
        decimal = decimal * 2 + (bit - '0'); // 逐位计算
    }

    cout << "十进制数为: " << decimal << endl;
    return 0;
}`} language="cpp" />
      <p className="text-muted-foreground mt-2 leading-10">八进制转十进制</p>

<CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string octal;
    cout << "请输入一个八进制数: ";
    cin >> octal;

    int decimal = 0;
    for (char digit : octal) {
        decimal = decimal * 8 + (digit - '0'); // 逐位计算
    }

    cout << "十进制数为: " << decimal << endl;
    return 0;
}`} language="cpp" />
      <p className="text-muted-foreground mt-2 leading-10">十六进制转十进制</p>

<CodeBlock code={`#include <iostream>
#include <string>
#include <cctype> // 用于 toupper 函数
using namespace std;

int main() {
    string hex;
    cout << "请输入一个十六进制数: ";
    cin >> hex;

    int decimal = 0;
    for (char ch : hex) {
        ch = toupper(ch); // 统一转为大写
        if (ch >= '0' && ch <= '9') {
            decimal = decimal * 16 + (ch - '0');
        } else if (ch >= 'A' && ch <= 'F') {
            decimal = decimal * 16 + (ch - 'A' + 10);
        } else {
            cout << "输入非法！" << endl;
            return 1;
        }
    }

    cout << "十进制数为: " << decimal << endl;
    return 0;
}`} language="cpp" />

      
    </div>
 

</div>
    
  )
}

