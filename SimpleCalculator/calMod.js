exports.cal = function (req, res, vals) {
    const operations = vals.operation;
    var result = 0;
    if (operations === "add") {
        result = parseInt(vals.first) + parseInt(vals.second);
    }
    else if (operations === "subtract") {
        result = parseInt(vals.first) - parseInt(vals.second);
    }else if (operations === "multiply") {
        result = parseInt(vals.first) * parseInt(vals.second);
    }else if (operations === "divide") {
        result = parseInt(vals.first) / parseInt(vals.second);
    }
    console.log(result);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>
<head><meta charset=\"utf-8\"/>
<title>Calculator Web Site</title>
</head>
<body>
<p>The Answer is :${String(result)}</p>
</body>
    </html> `);
    return res.end();
}