exports.add = function (req,res,vals) {
    var sum = parseInt(vals.first) + parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The sum is: ");
    res.write(String(sum));
    res.write("</p>");
    res.write("<form action=\"http://localhost:8080/n4.html\">");
    res.write("<input type=\"submit\" value=\"Another Operation\"></input>")
    res.write("</form>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };
    