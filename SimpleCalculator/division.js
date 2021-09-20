exports.div = function (req,res,vals) {
    var result = parseInt(vals.first) / parseInt(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The division result is: ");
    res.write(String(result));
    res.write("</p>");
    res.write("<form action=\"http://localhost:8080/calculator.html\">");
    res.write("<input type=\"submit\" value=\"Another Operation\"></input>")
    res.write("</form>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };
    