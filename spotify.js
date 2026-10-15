console.log(`spotify-json-2008.10.17`);
let url = $request.url;
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
} else {
    console.log('Không cần xử lý gì cả.');
}
$done({
    url
});
