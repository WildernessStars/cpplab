import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CodeBlock } from "@/components/ui/code-block"

const dataTypes = [
  {
    name:"字符类型",
    type: "char",
    bytes: 1,
    range: "-128~127",
  },
  {
    name:"布尔类型",
    type: "bool",
    bytes: 1,
    range: "取值false或true",
  },
  {
    name:"整型",
    type: "int",
    bytes: 4,
    range: "-2147483648~2147483647",
  },
  {
    name:"长整型",
    type: "long long",
    bytes: 8,
    range: "-2^63~2^63-1",
  },
  {
    name:"双精度浮点型",
    type: "double",
    bytes: 8,
    range: "-1.79*10^308 to 1.79*10^308",
  },
]
const sizeofExample = `    cout << int('A')<< endl;// 输出 65
    cout << int('9') << endl;// 输出 57
    cout << char(49)<< endl;// 输出'1'
    cout << char(122)<< endl;// 输出'z'`
export default function DataTypesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">基本数据类型</h1>
        <p className="text-muted-foreground mt-2">
        C++中的基本数据类型我们已经学习了很多了:int、long long、double、bool、char。
        </p>
        <p className="text-muted-foreground mt-2">
        每种数据类型都有自己的特点，匹配不同类型的数据，所占字节数及取值范围都不相同。
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>数据类型</TableHead>
            <TableHead>标识符</TableHead>
            <TableHead>所占字节数</TableHead>
            <TableHead>取值范围</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataTypes.map((type) => (
            <TableRow key={type.type}>
              <TableCell>{type.name}</TableCell>
              <TableCell className="font-mono">{type.type}</TableCell>
              <TableCell>{type.bytes}</TableCell>
              <TableCell>{type.range}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
      <h1 className="text-3xl font-bold">几个重要的ASCII码</h1>
      
          <li>数字 0~9 &emsp; 对应 ASCII码:48~57</li>
          <li>大写字母 A~Z &emsp; 对应 ASCII码:65~90</li>
          <li>小写字母 a~z &emsp; 对应 ASCII码:97~122</li>
        
        <p>由于所有数字和字母在 ASCII 码表中是连续的。例如:</p>
        <p>0'是 48,'1'是 49,…,'9'是57;</p>
        <p>a'是97,b'是 98,'c'是 99..</p>
        <p>因此我们只需要记住数字和大小写字母的开头，即可推算出所有数字、字母的 ASCII码。</p>
        </div>
    <div>
      <h1 className="text-3xl font-bold">整数与字符的相互转化</h1>
<p>由于 ASCIl 表里的字符和整数可以相互赋值转化，因此我们可以通过输出语句来查看:</p>
<CodeBlock code={sizeofExample} language="cpp" />
<pre>
  <code className="language-cpp">

  </code>
</pre>

</div>
    
    </div>
  )
}

