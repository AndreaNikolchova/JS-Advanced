function fromJSONToHTMLTable(input){
    let parsedInput = JSON.parse(input);
    let columnNames = Object.keys(parsedInput[0]);
    let columnValues = parsedInput.map(x=>Object.values(x));

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    let result = '<table>\n';
     result+= `   <tr>`;
     for(let smt of columnNames){
         result+= `<th>${escapeHtml(smt)}</th>`;
     }
     result+= `</tr>\n`;
     for(let smt of columnValues){
         result+= `   <tr>`;
         for(let value of smt){
             result+= `<td>${escapeHtml(value)}</td>`;
         }
         result+= `</tr>\n`;
     }
     result+= `</table>`;
     console.log(result);
 }
 fromJSONToHTMLTable(`[{"Name":"Pesho",
 "Score":4,
 " Grade":8},
{"Name":"Gosho",
 "Score":5,
 " Grade":8},
{"Name":"Angel",
 "Score":5.50,
 " Grade":10}]`

)