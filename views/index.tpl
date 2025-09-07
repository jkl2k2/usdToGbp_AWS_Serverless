<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>USD to GBP Converter</title>
    <style>
        body { font-family: sans-serif; text-align: center; margin-top: 50px; }
        input { padding: 10px; font-size: 16px; }
        button { padding: 10px 15px; font-size: 16px; cursor: pointer; }
        #result { margin-top: 20px; font-size: 20px; font-weight: bold; }
    </style>
</head>
<body>
    <h1>USD to GBP Converter</h1>
    <input type="number" id="usd-input" placeholder="Enter USD amount">
    <button onclick="convertCurrency()">Convert</button>
    <div id="result"></div>
    <script src="/static/script.js"></script>
</body>
</html>
