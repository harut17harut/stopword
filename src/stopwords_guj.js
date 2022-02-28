/* MIT License

Copyright (c) 2020 Stopwords ISO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const guj = ['અંગે', 'અંદર', 'અથવા', 'અને', 'અમને', 'અમારું', 'અમે', 'અહીં', 'આ', 'આગળ', 'આથી', 'આનું', 'આને', 'આપણને', 'આપણું', 'આપણે', 'આપી', 'આર', 'આવી', 'આવે', 'ઉપર', 'ઉભા', 'ઊંચે', 'ઊભું', 'એ', 'એક', 'એન', 'એના', 'એનાં', 'એની', 'એનું', 'એને', 'એનો', 'એમ', 'એવા', 'એવાં', 'એવી', 'એવું', 'એવો', 'ઓછું', 'કંઈક', 'કઈ', 'કયું', 'કયો', 'કરતાં', 'કરવું', 'કરી', 'કરીએ', 'કરું', 'કરે', 'કરેલું', 'કર્યા', 'કર્યાં', 'કર્યું', 'કર્યો', 'કાંઈ', 'કે', 'કેટલું', 'કેમ', 'કેવી', 'કેવું', 'કોઈ', 'કોઈક', 'કોણ', 'કોણે', 'કોને', 'ક્યાં', 'ક્યારે', 'ખૂબ', 'ગઈ', 'ગયા', 'ગયાં', 'ગયું', 'ગયો', 'ઘણું', 'છ', 'છતાં', 'છીએ', 'છું', 'છે', 'છેક', 'છો', 'જ', 'જાય', 'જી', 'જે', 'જેટલું', 'જેને', 'જેમ', 'જેવી', 'જેવું', 'જેવો', 'જો', 'જોઈએ', 'જ્યાં', 'જ્યારે', 'ઝાઝું', 'તને', 'તમને', 'તમારું', 'તમે', 'તા', 'તારાથી', 'તારામાં', 'તારું', 'તું', 'તે', 'તેં', 'તેઓ', 'તેણે', 'તેથી', 'તેના', 'તેની', 'તેનું', 'તેને', 'તેમ', 'તેમનું', 'તેમને', 'તેવી', 'તેવું', 'તો', 'ત્યાં', 'ત્યારે', 'થઇ', 'થઈ', 'થઈએ', 'થતા', 'થતાં', 'થતી', 'થતું', 'થતો', 'થયા', 'થયાં', 'થયું', 'થયેલું', 'થયો', 'થવું', 'થાઉં', 'થાઓ', 'થાય', 'થી', 'થોડું', 'દરેક', 'ન', 'નં', 'નં.', 'નથી', 'નહિ', 'નહી', 'નહીં', 'ના', 'ની', 'નીચે', 'નું', 'ને', 'નો', 'પછી', 'પણ', 'પર', 'પરંતુ', 'પહેલાં', 'પાછળ', 'પાસે', 'પોતાનું', 'પ્રત્યેક', 'ફક્ત', 'ફરી', 'ફરીથી', 'બંને', 'બધા', 'બધું', 'બની', 'બહાર', 'બહુ', 'બાદ', 'બે', 'મને', 'મા', 'માં', 'માટે', 'માત્ર', 'મારું', 'મી', 'મૂકવું', 'મૂકી', 'મૂક્યા', 'મૂક્યાં', 'મૂક્યું', 'મેં', 'રહી', 'રહે', 'રહેવું', 'રહ્યા', 'રહ્યાં', 'રહ્યો', 'રીતે', 'રૂ.', 'રૂા', 'લેતા', 'લેતું', 'લેવા', 'વગેરે', 'વધુ', 'શકે', 'શા', 'શું', 'સરખું', 'સામે', 'સુધી', 'હતા', 'હતાં', 'હતી', 'હતું', 'હવે', 'હશે', 'હશો', 'હા', 'હું', 'હો', 'હોઈ', 'હોઈશ', 'હોઈશું', 'હોય', 'હોવા']
export { guj }
