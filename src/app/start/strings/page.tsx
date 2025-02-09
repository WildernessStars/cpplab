import { CodeBlock } from "@/components/ui/code-block"


const sampleCode = `int arr1[5] = {1, 2, 3, 4, 5};
int arr2[5];

for (int i = 0; i < 5; ++i) {
    arr2[i] = arr1[i];
}
`
export default function DataTypesPage() {
  return (
    <div className="space-y-6">
      <div>
      {/* className="leading-10" */}
        <h1 className="text-3xl font-bold leading-10">string 的定义</h1>
        <p className="text-muted-foreground mt-2 leading-10">一串字符常被当做一个整体来对待，C++ 中专门为此设置了一种变量类型strinchar 处理一个字符，string 处理一串字符。由于一串字符的长度不固定，因此字符部占用的存储空间不固定，会根据我们的使用，自动分配存储空间。</p>
        <p className="text-muted-foreground mt-2 leading-10 ">
        如果我们在编程环境中打开一个 cpp 文件并打出 string 这个单词时,会发现它瓶不会被显示为蓝色斜体，这说明 string 并不是 C++的保留字。事实上，string 不是C本身具有的基本类型，而是 C++ 标准库中声明的一个“字符串类”，用这种类可以赵义对象，每一个字符串变量都是 string 类的一个对象。因此我们使用 string 类型时必程序开头包含头文件<strong>&lt;string&gt;</strong>。
        </p>
        <p className="text-muted-foreground mt-2 leading-10">
        与之前学过的知识类似，定义字符串变量的时候，也可以直接给字符串赋初值，初为一个字符串字面量，即用双引号扩起来的一串字符，举例如下:
        <CodeBlock code={`string s1;
s1 = "YuYu likes eating.";
string s2 = "Hello world!";`} language="cpp" />
        </p>
      </div>
      
      <div>
      <h1 className="text-3xl font-bold">输入</h1>
      <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main(){
    string s;
    cin >> s;
    cout <<s << endl;
    return 0;
}`} language="cpp" />
      <p className="text-muted-foreground mt-2 leading-10">整行输入</p>
      <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main(){
    string s;
    getline(cin,s);
    cout << s <<endl;
    return 0;
}`} language="cpp" />
<p className="text-muted-foreground mt-2 leading-10">多行输入</p>
<CodeBlock code={`string s[1024];
for(int i= 1; i <= n; i++){//确定行数
    getline(cin, s[i]);
}

int x= 0;
while(getline(cin, s[x])){//未知行数，需要题目中其他条件跳出循环
    x++;
}
`} language="cpp" />

<h1 className="text-3xl font-bold">字符串长度</h1>
<CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello";
    cout << "字符串的长度是: " << s.size() << endl;
    cout << "字符串的长度是: " << s.length() << endl;
    return 0;
}`} language="cpp" />

    <h1 className="text-3xl font-bold">字符串拼接</h1>
<CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = " World";
    string s3 = s1 + s2; 
    cout << s3 << endl;
    return 0;
}`} language="cpp" />

    <p className="text-muted-foreground mt-2 leading-10">也可以使用 += 运算符。</p>
    <h1 className="text-3xl font-bold">字符串比较</h1>
    <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "apple";
    string s2 = "banana";
    if (s1 < s2) {
        cout << s1 << " 在字典序上小于 " << s2 << endl;
    }
    return 0;
}`} language="cpp" />
      <h1 className="text-3xl font-bold">访问字符串中的字符</h1>
      <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello";
    // 使用下标运算符
    cout << "第一个字符是: " << s[0] << endl;
    // 使用 at() 函数
    cout << "第二个字符是: " << s.at(1) << endl;
    return 0;
}`} language="cpp" />
      <h1 className="text-3xl font-bold">字符串查找</h1>
      <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello World";
    size_t pos = s.find("World");
    if (pos != string::npos) {
        cout << "子字符串的位置是: " << pos << endl;
    } else {
        cout << "未找到子字符串" << endl;
    }
    return 0;
}`} language="cpp" />
    
      <h1 className="text-3xl font-bold">字符串替换</h1>
      <CodeBlock code={`#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello World";
    s.replace(6, 5, "C++"); //替换从索引 6 开始的 5 个字符为 "C++"
    cout << s << endl; //"Hello C++"
    return 0;
}`} language="cpp" />
    
    

      
    </div>
 

</div>
    
  )
}

