import { CodeBlock } from "@/components/ui/code-block"

export default function DataTypesPage() {
  return (
    <div className="space-y-6">
      <div>
      {/* className="leading-10" */}
        <h1 className="text-3xl font-bold leading-10">数组的定义</h1>
        <p className="text-muted-foreground mt-2 leading-10">数组是由多个同类型数据所组成的一个整体，用序号或者下标来区分各个数据，定义格式如下:</p>
        <p className="text-muted-foreground mt-2 leading-10 ">
        <strong>类型名 数组名[常量表达式];</strong><br></br>
        例如:<CodeBlock code={`int a[100];`} language="cpp" />
        </p>
        <p className="text-muted-foreground mt-2 leading-10">
        与变量的定义类似，当有多个同一类型的数组需要定义，也可以放在一起。<br></br>
        例如:<CodeBlock code={`int d[100],e[1000];`} language="cpp" />
        </p>
        <p className="text-muted-foreground mt-2 leading-10">类似于全局变量，我们通常将数组定义在所有函数外边，好处如下</p>
        
        <li> 定义的元素个数不受限制;</li>
        <li>数组成员的值统一被初始化为 0;</li>
        <li>各个函数中均可以对数组进行操作。</li>
        
        <p className="text-muted-foreground mt-2 leading-10">数组名的起名要求和变量类似也要遵循一定的命名规则(同变量命名规则)。</p>
        <p className="text-muted-foreground mt-2 leading-10">数组名后边的【元素个数】是指数组中包含的元素数量，元素个数必须为正整数，或者是结果为正整数的常量表达式，因此 a[360]与 a[60*6]都是定义数组的正确写法。</p>
        <p className="text-muted-foreground mt-2 leading-10">常量表达式的值表示元素的个数，即数组长度，例如在&quot;int a[10]&quot;中，10表示a数组有 10 个元素。</p>
      </div>
      
      <div>
      <h1 className="text-3xl font-bold">数组初始化</h1>
      <p className="text-muted-foreground mt-2 leading-10">我们知道定义在全局的数组元素的默认初始值为0，</p>
      <p className="text-muted-foreground mt-2 leading-10">当我们不用默认值对数组元素进行初始化的时候，该如何实现呢?</p>
      <p className="text-muted-foreground mt-2 leading-10">1. 在定义数组时，对全部数组元素赋予初值</p>
        <CodeBlock code={`int a[10]={0,1,2,3,4,5,6, 7,8, 9 };`} language="cpp" />
        <p className="text-muted-foreground mt-2 leading-10">2. 可以只给一部分元素赋值</p>
        <CodeBlock code={`int a[10]={0, 1,2, 3, 4 };`} language="cpp" />
        <p className="text-muted-foreground mt-2 leading-10">在这种情况下定义数组有 10个元素，但花括号内只提供五个初值，这表示只给五个元素赋值，后五个元素值默认为零。</p>
        </div>
      
      <div>
 
        <h1 className="text-3xl font-bold">赋值</h1>
      <p className="text-muted-foreground mt-2 leading-10">用循环语句。不能用等号将一个数组的整体内容直接赋值给另一个数组。</p>
      <CodeBlock code={`int arr1[5] = {1, 2, 3, 4, 5};
int arr2[5];

for (int i = 0; i < 5; ++i) {
    arr2[i] = arr1[i];
}
`} language="cpp" />

      </div>
      
      <div>
      <h1 className="text-3xl font-bold">字符数组</h1>
      <p className="text-muted-foreground mt-2 leading-10">字符串长度和数组大小</p>
      <p className="text-muted-foreground mt-2 leading-10">字符串长度：字符串中实际字符的数量，不包括空字符 &apos;\0&apos;。 </p>
      <p className="text-muted-foreground mt-2 leading-10">数组大小：数组中所有元素的数量，包括空字符 &apos;\0&apos;。 </p>
      <CodeBlock code={`char str[] = "GESP";//字符串长度是4，数组大小是5`} language="cpp" />
      
      <p className="bg-green-400 text-black p-1 leading-10">strlen 和 sizeof 的区别：对于 char str[] = &quot;GESP&quot;;，strlen(str) 的结果是4, sizeof(str) 的结果是5</p>

      <h3 className="text-2xl font-bold">&emsp;字符串的比较</h3>
      <CodeBlock code={`char str1[] = "GESP";
char str2[] = "GESP";
if (strcmp(str1, str2) == 0) {
    // 字符串相等
}`} language="cpp" />
<h3 className="text-2xl font-bold">&emsp;字符串的拼接</h3>
      <CodeBlock code={`char str1[10] = "GESP";
char str2[] = "123";
strcat(str1, str2); // str1 变为 "GESP123"`} language="cpp" />
<h3 className="text-2xl font-bold">&emsp;字符串的复制</h3>
      <CodeBlock code={`char str1[10];
char str2[] = "GESP";
strcpy(str1, str2); // str1 变为 "GESP""`} language="cpp" />
    </div>
 

</div>
    
  )
}

