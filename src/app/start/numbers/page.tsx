
export default function DataTypesPage() {
  return (
    <div className="space-y-6">
      <div>
      {/* className="leading-10" */}
        <h1 className="text-3xl font-bold leading-10">真值</h1>
        <p className="text-muted-foreground mt-2 leading-10">带符号位的机器数的真正<strong>数值</strong>。比如10000011 真值为 -3。</p>
      </div>
      
      <div>
      <h1 className="text-3xl font-bold">原码</h1>
      <p className="text-muted-foreground mt-2 leading-10">原码就是符号位加上真值的绝对值。用第一位表示符号，其余位表示值。比如如果是8位二进制：</p>
        <p>[+1]原码 = 0000 0001</p>
        <p>[-1]原码 = 1000 0001</p>
    <p className="text-muted-foreground mt-2 leading-10">第一位是符号位。因为第一位是符号位，所以8位二进制数的取值范围就是：</p>
        <p>[1111 1111 , 0111 1111]</p>
        <p>即</p>
        <p>[-127 , 127]</p>
        </div>
      
      <div>
 
      <h1 className="text-3xl font-bold">反码</h1>
    <p className="text-muted-foreground mt-2 leading-10">反码的表示方法是：</p>
    <p className="text-muted-foreground mt-2 leading-10">正数和0的反码是其本身</p>
    <p className="text-muted-foreground mt-2 leading-10">负数的反码是在其原码的基础上，符号位不变，其余各个位取反。</p>
        <p>[+1]反码 = 0000 0001</p>
        <p>[-1]反码 = 1111 1110</p>
    <p>可见如果一个反码表示的是负数，我们无法直观的看出来它的数值。通常要将其转换成原码再计算。</p>

      </div>
      
      <div>
      <h1 className="text-3xl font-bold">补码</h1>
      <p className="text-muted-foreground mt-2 leading-10">补码的表示方法是：</p>
    <p className="text-muted-foreground mt-2 leading-10">正数的补码就是其本身</p>
    <p className="text-muted-foreground mt-2 leading-10">负数的补码是在其原码的基础上，符号位不变，其余各位取反，最后+1。 （即在反码的基础上+1）</p>
        <p>[+1]补码 = 0000 0001</p>
        <p>[-1]补码 = 1111 1111</p>
    <p>对于负数，补码表示方式也是我们无法直观看出其数值的。通常也需要先转换成原码。</p>

    </div>
 

</div>
    
  )
}

