"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
function getTotalPosts() {
    return 319;
}
function getPosts(start, limit) {
    return [];
}
var corsOptions = {
    exposedHeaders: ['Content-Range']
};
app.use((0, cors_1["default"])(corsOptions));
app.get('/api/posts', function (req, res) {
    var start = parseInt(req.query.start) || 0;
    var limit = parseInt(req.query.limit) || 10;
    var total = getTotalPosts();
    var posts = getPosts(start, limit);
    var contentRange = "posts ".concat(start, "-").concat(start + posts.length - 1, "/").concat(total);
    res.setHeader('Content-Range', contentRange);
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.json(posts);
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
